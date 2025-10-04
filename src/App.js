import { Chessboard } from 'react-chessboard';
import './App.css';

export default function App() {
  const startingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Chess Board</h1>
      
      <div style={{ width: '560px', height: '560px' }}>
        <Chessboard 
          position={startingPosition}
          boardWidth={560}
        />
      </div>
    </div>
  );
};

