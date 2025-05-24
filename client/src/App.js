import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('https://urban-space-broccoli-gjwr64gggrg3wggp-5000.app.github.dev/api/hello')
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setMessage('Error connecting to backend');
      });
  }, []);

  return (
    <div>
      <h1>React + Express App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
