import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <h1>Dictionary</h1>

        <Dictionary />

        <footer>
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/franziska-schallhorn-b54866108/"
            target="_blank"
            rel="noreferrer"
          >
            Franziska Schallhorn
          </a>
        </footer>
      </div>
    </div>
  );
}
