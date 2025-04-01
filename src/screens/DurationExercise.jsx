
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

export default function DurationExercise() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { item, exercises } = location.state || {};
  const suggested = exercises?.find(ex => ex.name === item?.suggested);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds(prev => {
          if (prev >= 990) {
            setTime(prevTime => prevTime + 1);
            return 0;
          }
          return prev + 10;
        });
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${(milliseconds/10).toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>{name}</h2>
      <h1 style={{ margin: '20px 0' }}>{formatTime()}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={() => {
            setIsRunning(false);
            setTime(0);
            setMilliseconds(0);
          }}>
            Reset
          </button>
        </div>
        {suggested && (
          <button 
            className="try-button"
            onClick={() => navigate(`/duration/${suggested.name}`, { state: { item: suggested, exercises } })}
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
