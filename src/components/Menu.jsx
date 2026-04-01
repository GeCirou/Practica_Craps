const Menu = ({ exercises, onSelectExercise, selected }) => {
  
  // 1. Definimos la lógica de visualización una sola vez fuera del loop
  const getLabelDisplay = (exercise) => {
    if (exercise.label === "Craps 2- 12") return "x 10 - 1/3";
    if (exercise.label === "Craps 3") return "x 4 + 1/3";

    if (exercise.multiplier <= 2) {
      return `${(exercise.multiplier * 100).toFixed(1)}%`;
    }

    return `x ${exercise.multiplier}`;
  };

  const handleSelection = (e) => {
    if (!e.target.value) {
      onSelectExercise(null);
      return;
    }
    const exercise = exercises.find((ex) => ex.label === e.target.value);
    onSelectExercise(exercise);
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <select value={selected?.label || ""} onChange={handleSelection}>
        <option value="">Elegí uno</option>

        {exercises.map((exercise, idx) => {
          const isHeader = exercise.label.includes("---");
          
          // 2. Ejecutamos la función pasando el objeto 'exercise'
          const labelText = getLabelDisplay(exercise);

          return (
            <option 
              key={idx + exercise.label} 
              value={exercise.label}
              disabled={isHeader}
            >
              {isHeader ? exercise.label : `${exercise.label} (${labelText})`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Menu;