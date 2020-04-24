import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
          <Footer />
        </header>
      </div>
    </>
  );
}

export default App;
