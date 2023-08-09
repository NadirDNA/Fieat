<?php
require '/Users/nadir/Desktop/FeaT/vendor/autoload.php';

// Chargement des variables d'environnement
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$serveur = "db5014010919.hosting-data.io";
$utilisateur = "dbu4264385";
$motdepasse = "15021997Na.";
$basededonnees = "dbs11712183";

$connexion = new mysqli($serveur, $utilisateur, $motdepasse, $basededonnees);

if ($connexion->connect_error) {
    die("La connexion à la base de données a échoué : " . $connexion->connect_error);
}

// Étape 1: Valider les informations de connexion
$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM User WHERE username = ? AND password = ?";
$stmt = $connexion->prepare($query);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 0) {
    die('Erreur de connexion');
}

// Étape 2: Stocker les données du formulaire dans l'espace client
session_start();
$_SESSION['user_data'] = $_POST;

// Étape 3: Envoyer les données à l'API OpenAI
// Configuration de l'API OpenAI
$openai_api_key = "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";
$headers = [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $openai_api_key
];

$url = "https://api.openai.com/v1/engines/davinci/completions";
$body = json_encode([
    'prompt' => "Générer un programme alimentaire et sportif pour une semaine, incluant chaque repas, ingrédients, macronutriments, exercices, répétitions, séries, conseils d'exécution, et groupe musculaire sollicité.",
    'max_tokens' => 500
]);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$response_data = json_decode($response, true);
$programme_alimentaire_sportif = $response_data['choices'][0]['text'];

$_SESSION['programme'] = $programme_alimentaire_sportif;

// Rediriger vers la page suivante
header('Location: Vos programmes.html');
?>
