// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Fetch a random dog image
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.message) {
          
          setDogImage(data.message);
        } else {
          console.error('Failed to fetch dog image.');
        }
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      })
      .finally(() => {
        // Set loading to false once the request is complete
        setIsLoading(false);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;