import { useState, useEffect } from "react";

import "./App.css";

import leopardImage from "./assets/Select_leopard2.png";

import Menu from "./components/Menu";
import GameCard from "./components/GameCard";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  const exercises = [
    {label: "--- BUENA ---", multiplier: 1},
    { label: "Enganche 4 - 10", multiplier: 2},
    { label: "Enganche 5 - 9", multiplier: 1.5},
    { label: "Enganche 6 - 8", multiplier: 1.2},
    {label: "--- Camuninas ---", multiplier: 1},
    { label: "Camnina 4 - 10", multiplier: 7},
    { label: "Camnina 6 - 8", multiplier: 9},
    {label: "--- Cuadro ---", multiplier: 1},
    { label: "3 - 11", multiplier: 15},
    { label: "2 - 12", multiplier: 31},
    { label: "2/12 - 2/3 (2) - 11/12 (12)", multiplier: 15},
    { label: "3/11 - 2/2 (3) - 11/12 (11)", multiplier: 7},
    { label: "Cuadro 3 - 11", multiplier: 3},
    { label: "Cuadro 2 - 12", multiplier: 7},
    {label: "--- Costilla ---", multiplier: 1},
    { label: "4 - 10", multiplier: 1.8},
    { label: "5 - 9", multiplier: 1.4},
    { label: "6 - 8", multiplier: 1.1},
    {label: "-------------", multiplier: 1},
    {label: "--- MALA ---", multiplier: 1},
    { label: "Enganche contra 4 - 10", multiplier: 0.5},
    { label: "Enganche contra 5 - 9", multiplier: 0.6666},
    { label: "Enganche contra 6 - 8", multiplier: 0.8333},
    {label: "--- Costilla ---", multiplier: 1},
    { label: "Contra 4 - 10", multiplier: 0.45},
    { label: "Contra 5 - 9", multiplier: 0.6},
    { label: "Contra 6 - 8", multiplier: 0.8},
    {label: "-------------", multiplier: 1},
    {label: "--- OTROS ---", multiplier: 1},
    { label: "Any Craps", multiplier: 7},
    { label: "Any Seven", multiplier: 4},
    { label: "Craps 2- 12", multiplier: 29/3},
    { label: "Craps 3", multiplier: 13/3}

  ];

  const [selectedExercise, setSelectedExercise] = useState(null);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("practice_score");
    return savedScore !== null ? Number(savedScore) : 0;
  });
  const [attempts, setAttempts] = useState(() => {
    const savedAttempts = localStorage.getItem("practice_attempts");
    return savedAttempts !== null ? Number(savedAttempts) : 0;
  });

  useEffect(() => {
    localStorage.setItem("practice_score", score);
    localStorage.setItem("practice_attempts", attempts);
  }, [score, attempts]);

  const updateScore = (isCorrect) => {
    setAttempts(prevAttempts => prevAttempts + 1);
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  }

  const resetScore = () => {
    setScore(0);
    setAttempts(0);
    
    console.log("¡Todo en 0!");
  }

  return (
    <div className="app-container">
      <h1 className="main-title">CRAPS</h1>

      <Menu className="Menu" exercises={exercises} onSelectExercise={setSelectedExercise} selected={selectedExercise} />
      <GameCard leopard={leopardImage} selectedExercise={selectedExercise} onResult={updateScore} />
      <ScoreBoard className="Scoreboard" attempts={attempts} score={score} reset={resetScore}/>
    </div>
  )
}

export default App
