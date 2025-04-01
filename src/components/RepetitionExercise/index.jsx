
import { useState } from 'react';
import './styles.css';

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-container">
      <h2>{name}</h2>
      <div className="counter">{count}</div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
