
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import RepetitionExercise from './screens/RepetitionExercise';
import DurationExercise from './screens/DurationExercise';

const exercises = [
  { 
    id: '1',
    name: 'Swimming', 
    type: 'duration',
    suggested: 'Running'
  },
  { 
    id: '2',
    name: 'Running', 
    type: 'duration',
    suggested: 'Plank'
  },
  { 
    id: '3',
    name: 'Plank', 
    type: 'repetition',
    suggested: 'Cycling'
  },
  { 
    id: '4',
    name: 'Cycling', 
    type: 'duration',
    suggested: 'Swimming'
  }
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home exercises={exercises} />} />
        <Route path="/duration/:name" element={<DurationExercise />} />
        <Route path="/repetition/:name" element={<RepetitionExercise />} />
      </Routes>
    </Router>
  );
}
