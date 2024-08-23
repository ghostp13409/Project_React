import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);
  useEffect(()=>{
    console.log(`It's ${secondary} around here!`);
  }, [secondary])
  return (
    <div className="App">
      <h1>Current Emotion is {emotion} </h1>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Excited")}>Excited</button>
      <h2>Current secondary emotion is {secondary}</h2>

      <button onClick={() => setSecondary("Grateful")}>Grateful</button>
    </div>
  );
}

export default App;
