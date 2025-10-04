import logo from './logo.svg';
import './App.css';

export default function App() {

  const board = []

  for (let row = 0; row < 8; row ++){
    for (let col = 0; col < 8; col ++){

      board.push({row, col});
    }

  }

  const isDarkSquare = (row, col) => {
    return (row + col) % 2  === 1 
  };
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Chess Board</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 60px)',
        gridTemplateRows: 'repeat(8, 60px)',
        border: '2px solid #333',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }}>
        {board.map((square) => (
          <div
            key={`${square.row}-${square.col}`}
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: isDarkSquare(square.row, square.col) 
                ? '#f0d9b5'  // Light square
                : '#b58863', // Dark square
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#666'
            }}
          >
            {/* Optional: show coordinates for debugging */}
            {/* {square.row},{square.col} */}
          </div>
        ))}
      </div>

      
    </div>
  );
};

