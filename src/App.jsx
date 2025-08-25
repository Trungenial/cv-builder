import { useState } from "react";
import "./App.css";
import General from "./components/General";

function App() {
    return (
        <div className="cv-container">
            <h1>CV Builder</h1>
            <General />
            <div></div>
            <div></div>
        </div>
    );
}

export default App;
