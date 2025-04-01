
import { useNavigate } from 'react-router-dom';

export default function Home({ exercises }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <button onClick={() => navigate('/')} style={{ padding: '8px 16px', marginBottom: 10, width: '400px' }}>Home</button>
        <h1 style={{ width: '100%', textAlign: 'center', fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}>Workout Tracker</h1>
      </div>
      <div style={{ display: 'grid', gap: 15 }}>
        {exercises.map(item => (
          <div 
            key={item.id}
            style={{
              padding: 15,
              backgroundColor: '#f0f0f0',
              borderRadius: 25,
              cursor: 'pointer',
              maxWidth: '300px',
              margin: '0 auto',
              width: '100%'
            }}
            onClick={() => navigate(`/${item.type}/${item.name}`, { state: { item, exercises } })}
          >
            <h2 style={{ margin: '0 0 10px 0', textAlign: 'center', fontSize: '1.8em', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{item.name}</h2>
            <p style={{ margin: 0, color: '#666', textAlign: 'center' }}>{item.type === 'duration' ? 'Duration' : 'Repetition'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
