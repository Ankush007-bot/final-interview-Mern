import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDark(!dark)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default App;
