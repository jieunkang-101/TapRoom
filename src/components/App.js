import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TapMenu from './TapMenu';
import NewTapForm from './NewTapForm';
import '../App.css';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tapMenu: [
        {
          id: v4(),
          img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deschutesbrewery.com%2F&psig=AOvVaw1j6WShscVs_UnJwq0uWKnO&ust=1587835611837000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDW3eDKgekCFQAAAAAdAAAAABAD",
          name: "MIRROR POND PALE ALE",
          brand: "DESCHUTES",
          price: "$ 12",
          abv: "12% ABV"
        }

      ]
    }
  }      




  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <Header />
            <TapMenu />
            <NewTapForm />
            <Footer />
          </header>
        </div>
      </>
    );
    }  
}

export default App;
