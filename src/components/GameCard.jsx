import { useState } from "react";

const GameCard = ({ leopard, selectedExercise, onResult }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [baseNumber, setBaseNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  if (!selectedExercise) {
    return (
      <div className="game-card">
        <img src={leopard} alt="A snow leopard giving you options." height="300px" />
        <p>Por favor, seleccioná un ejercicio en el menú para comenzar.</p>
      </div>
      );
  }

  const handleSetBaseNumber = () => {
    const nMin = Math.round(Number(min) / 1000) * 1000;
    const nMax = Math.round(Number(max) / 1000) * 1000;
    setMin(nMin);
    setMax(nMax);

    if (nMax <= nMin) {
      alert("El máximo debe ser mayor al mínimo");
      return;
    }

    const range = (nMax - nMin) / 1000;
    const randomStep = Math.floor(Math.random() * (range + 1));
    const finalNumber = nMin + (randomStep * 1000);
    
    setBaseNumber(finalNumber);
    setUserAnswer(""); 
  };

  const handleUserAnswer = () => {
    const correctAnswer = Math.round((baseNumber * selectedExercise.multiplier) / 1000) * 1000;
    const isCorrect = Number(userAnswer) === correctAnswer;

    if (isCorrect) {
      alert("¡Correcto!");
      setBaseNumber(0);
    } else {
      alert(`Casi... la respuesta era ${formatNumber(correctAnswer)}. ¡Seguí practicando!`);
    }

    onResult(isCorrect);
    setUserAnswer(""); 
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (baseNumber > 0 && userAnswer !== "") {
      handleUserAnswer();
    }
  };

  const getMultiplierDisplay = () => {
    if (selectedExercise.label === "Craps 2- 12") return "x 10 - 1/3";
    if (selectedExercise.label === "Craps 3") return "x 4 + 1/3";

    if (selectedExercise.multiplier <= 2) {
      return `${(selectedExercise.multiplier * 100).toFixed(0)}%`;
    }
    return `x ${selectedExercise.multiplier}`;
  };

  const multiplierText = getMultiplierDisplay();

  const formatNumber = (num) => {
  return Number(num).toLocaleString('es-AR');
};

  return (
    <form className="game-card" onSubmit={handleSubmit}>
      <h2>{selectedExercise.label} ({multiplierText})</h2>
      <p>
        El valor minimo a usar es 1.000.<br></br>
        los resultados se redondean a los 1.000 más cercanos, por ejemplo:
        <ul>
          <li>1.200 se redondea a 1.000</li>
          <li>1.500 se redondea a 2.000</li>
        </ul>
      </p>
      
      <div className="setup-section">
        <label>Min: </label>
        <input 
          type="number" 
          value={min} 
          onChange={(e) => setMin(e.target.value)} 
          onFocus={(e) => e.target.select()} 
          step="1000"
          placeholder="0"
        />

        <label>Max: </label>
        <input 
          type="number" 
          value={max} 
          onChange={(e) => setMax(e.target.value)} 
          onFocus={(e) => e.target.select()} 
          step="1000"
          placeholder="0"
        />

        <button type="button" onClick={handleSetBaseNumber}>Generar</button>
      </div>

      {baseNumber > 0 && (
        <div className="game-section">
          <p>¿Cuánto es <strong>{formatNumber(baseNumber)}</strong> {multiplierText?.toLowerCase().trim().startsWith('x') ? multiplierText : `al ${multiplierText}`}?</p>
          <label>Respuesta: </label>
        <input 
          type="number" 
          value={userAnswer} 
          onChange={(e) => setUserAnswer(e.target.value)} 
          disabled={baseNumber === 0}
          placeholder="1.000"
          autoFocus
        />
        <button type="submit" disabled={baseNumber === 0}>Verificar</button>
        </div>

      )}
    </form>
  );
}

export default GameCard;
