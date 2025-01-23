import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    return (
      <div>
          <h1>Welcome to the Personalized Study Assistant</h1>
          <p>Your one-stop solution for personalized learning.</p>
      </div>
  );
}

function Quiz() {
    return <h1>Quiz Page</h1>;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </Router>
    );
}

export default App;
