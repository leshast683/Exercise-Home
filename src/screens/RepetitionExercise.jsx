
import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

export default function RepetitionExercise() {
  const [count, setCount] = useState(0);
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { item, exercises } = location.state || {};
  const suggested = exercises?.find(ex => ex.name === item?.suggested);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>{name}</h2>
      <h1 style={{ margin: '20px 0' }}>{count}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        {suggested && (
          <button 
            className="try-button"
            onClick={() => navigate(`/${suggested.type}/${suggested.name}`, { state: { item: suggested, exercises } })}
          >
            Try {suggested.name}
          </button>
        )}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="back-button" onClick={() => navigate(-1)}></button>
          <button onClick={() => navigate('/')}>Home</button>
        </div>
      </div>
    </div>
  );
}
