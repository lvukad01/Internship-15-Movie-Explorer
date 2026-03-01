import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        color: 'white',
        textAlign: 'center',
        gap: '1rem',
      }}
    >
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#646cff',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        ← Go Back Home
      </button>
    </div>
  );
}