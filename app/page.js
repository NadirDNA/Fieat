"use client";

import { TextField, MenuItem } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function Home() {
  const [state, setState] = useState({
    taille: null,
    poids: null,
    age: null,
    sexe: "",
    regime: "",
    activite: "",
    repas: "",
    entrainement: "",
    blessures: "",
    allergies: "",
    objectif: "",
  });
  const [mounted, setMounted] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode:
            mounted &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        },
      }),
    [mounted]
  );

  useEffect(() => {
    if (window) setMounted(true);
    else setMounted(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5vh auto",
          }}
        >
          <img style={{ height: "500px" }} src="/FIEAT.png" alt="FIEAT LOGO" />
        </div>
        <h1 style={{ textAlign: "center", width: "50%", margin: "0 auto" }}>
          Bienvenue sur notre site de génération de programmes nutritionnels et
          sportifs personnalisés !
        </h1>
        <p
          style={{
            textAlign: "center",
            width: "50%",
            margin: "2% auto",
            fontSize: "15px",
          }}
        >
          Notre site vous permet de générer des programmes nutritionnels et
          sportifs adaptés à vos besoins et à vos objectifs. Remplissez le
          formulaire ci-dessous pour fournir les informations nécessaires.
        </p>
        <div
          style={{
            width: "70vw",
            margin: "0 auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            borderTop: "1px solid",
          }}
        >
          <p
            style={{
              textAlign: "center",
              width: "50%",
              margin: "auto",
              marginBottom: "5%",
              fontSize: "15px",
              borderBottom: "1px solid",
              marginTop: "2%",
            }}
          >
            Informations personnelles
          </p>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              type="number"
              label="Taille (en cm)"
              placeholder="170"
              value={state.taille}
              onChange={(e) => setState({ ...state, taille: e.target.value })}
            />
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              type="number"
              label="Poids (en kg)"
              placeholder="170"
              value={state.poids}
              onChange={(e) => setState({ ...state, poids: e.target.value })}
            />
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              type="number"
              label="Âge"
              placeholder="21"
              value={state.age}
              onChange={(e) => setState({ ...state, age: e.target.value })}
            />
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              select
              required
              value={state.sexe}
              label="Sexe"
              onChange={(e) => setState({ ...state, sexe: e.target.value })}
            >
              <MenuItem value={""} />
              <MenuItem value={"F"}>Féminin</MenuItem>
              <MenuItem value={"M"}>Masculin</MenuItem>
            </TextField>
          </div>
          <p
            style={{
              textAlign: "center",
              width: "50%",
              margin: "auto",
              marginBottom: "3%",
              fontSize: "15px",
              borderBottom: "1px solid",
              marginTop: "1%",
            }}
          >
            Informations sur le régime alimentaire et l'activité physique
          </p>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              label="Régime alimentaire"
              placeholder=""
              value={state.regime}
              onChange={(e) => setState({ ...state, regime: e.target.value })}
            />
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              label="Activité journalière"
              placeholder=""
              value={state.activite}
              onChange={(e) => setState({ ...state, activite: e.target.value })}
            />
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              type="number"
              label="Nombre de repas souhaités par jour"
              placeholder="3"
              value={state.repas}
              onChange={(e) => setState({ ...state, repas: e.target.value })}
            />
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              type="number"
              value={state.entrainement}
              label="Nombre d'entrainements souhaités par semaine"
              onChange={(e) =>
                setState({ ...state, entrainement: e.target.value })
              }
            />
          </div>
          <p
            style={{
              textAlign: "center",
              width: "50%",
              margin: "auto",
              marginBottom: "3%",
              fontSize: "15px",
              borderBottom: "1px solid",
              marginTop: "1%",
            }}
          >
            Informations sur la santé
          </p>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              label="Blésures particulières"
              placeholder=""
              value={state.blessures}
              onChange={(e) =>
                setState({ ...state, blessures: e.target.value })
              }
            />
            <TextField
              style={{ width: "80%", marginBottom: "2%" }}
              required
              label="Allergies particulières"
              placeholder=""
              value={state.allergies}
              onChange={(e) =>
                setState({ ...state, allergies: e.target.value })
              }
            />
          </div>
          <p
            style={{
              textAlign: "center",
              width: "50%",
              margin: "auto",
              marginBottom: "3%",
              fontSize: "15px",
              borderBottom: "1px solid",
              marginTop: "1%",
            }}
          >
            Informations sur les objectifs
          </p>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingBottom: "4%",
              marginBottom: "4%",
              borderBottom: "1px solid",
            }}
          >
            <TextField
              style={{ width: "80%" }}
              required
              label="Objectifs"
              placeholder=""
              value={state.objectif}
              onChange={(e) => setState({ ...state, objectif: e.target.value })}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
