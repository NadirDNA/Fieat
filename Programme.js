require('dotenv').config();
const { Configuration, OpenAIApi, ChatCompletionCreate, ChatCompletionMessage } = require('openai');

// Configure l'API OpenAI avec votre clé secrète API.
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "FieaT" // Remplacez par votre ID d'organisation
});

const openai = new OpenAIApi(configuration);

async function fetchChatCompletion() {
    const model = "gpt-3.5-turbo"; // Le modèle à utiliser

    // Les informations utilisateur
    let taille = ''; // taille de l'utilisateur
    let poids = ''; // poids de l'utilisateur
    let age = ''; // âge de l'utilisateur
    let sexe = ''; // sexe de l'utilisateur
    let activite = ''; // niveau d'activité physique de l'utilisateur
    let objectif = ''; // objectif de poids de l'utilisateur
    let regime = ''; // habitudes alimentaires de l'utilisateur
    let allergies = ''; // allergies de l'utilisateur
    let entrainement = ''; // nombre d'entraînements hebdomadaires de l'utilisateur
    let blessures = ''; // blessures de l'utilisateur
    let repas = ''; // nombre de repas par jour

    let prompt = `Avec les informations suivantes : taille de ${taille}, poids de ${poids}, âge de ${age}, sexe ${sexe}, niveau d'activité physique ${activite}, objectif de poids ${objectif}, habitudes alimentaires ${regime}, allergies ${allergies}, nombre d'entraînements hebdomadaires ${entrainement} et blessures ${blessures}, je souhaite que tu me calcules les besoins caloriques journaliers et les macronutriments journaliers. Je souhaite également un planning alimentaire hebdomadaire qui tient compte de l'objectif, des habitudes alimentaires et des allergies, ainsi qu'un programme sportif hebdomadaire qui prend en compte les blessures, l'objectif, le nombre d'entraînements hebdomadaires et qui s'adapte au programme alimentaire en termes de dépenses énergétiques et de macronutriments. Merci de noter les macronutriments présents dans chaque repas.`

    // Les messages qui composent la conversation. Ils seront utilisés comme prompt pour le modèle.
    const messages = [
        new ChatCompletionMessage({role: "system", content: "Vous êtes un assistant utile."}),
        new ChatCompletionMessage({role: "user", content: "Bonjour!"}),
        new ChatCompletionMessage({role: "user", content: prompt})
    ];

    const chatCompletionCreate = new ChatCompletionCreate({
        model: model,
        messages: messages,
        n: 1, // Le nombre de choix de fin de conversation à générer pour chaque message d'entrée
        temperature: 0.7 // Contrôle le niveau de détermination du modèle
    });

    try {
        const response = await openai.createChatCompletion(chatCompletionCreate);
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
}

fetchChatCompletion();
