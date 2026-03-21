const ScoreBoard = ({ attempts, score, reset }) => {
  return (
    <div className="score-board">
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">Intentos</span>
          <span className="stat-value">{attempts}</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-label">Aciertos</span>
          <span className="stat-value">{score}</span>
        </div>
      </div>
      
      <button className="reset-btn" onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default ScoreBoard;
