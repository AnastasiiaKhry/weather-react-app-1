import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kepno" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/AnastasiiaKhry/weather-react-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anastasiia Khrystoforova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnastasiiaKhry/weather-react-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/AnastasiiaKhry/weather-react-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
