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
      showTabMenu: true,
      masterTapMenu: [
        {
          id: v4(),
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr4-0GqixCFrqtZ8bEgiwkRdGYXcyNlD0TpX3PMwzJx4b9r8SS&usqp=CAU",
          name: "MIRROR POND PALE ALE",
          brand: "DESCHUTES",
          price: "12",
          abv: "12",
          pints: 124
        },
        {
          id: v4(),
          img: "https://pbs.twimg.com/profile_images/1118565165480337408/hTb40HYf.png",
          name: "CZECH-STYLE PILSNER",
          brand: "BUOY",
          price: "11",
          abv: "9.8",
          pints: 124
        },
        {
          id: v4(),
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAk98i_WUT93Ab5sOy0uCIjIkA4rQUYVRM_P_nyifr3P34a5la&usqp=CAU",
          name: "Barrel Aged IPA",
          brand: "GIGANTIC",
          price: "13",
          abv: "11.4",
          pints: 124
        },
        {
          id: v4(),
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9z4LT7645EIuXtmxydA-Axpv0eh9m8CLr0HVOAi6_AuRh1zdq&usqp=CAU",
          name: "Mosaic Hopped CREAM ALE",
          brand: "BRIDGEPORT",
          price: "10.5",
          abv: "10",
          pints: 124
        }
      ]
    }
  }      


  setVisibility = () => {
    if (this.state.showTabMenu) {
      return {
        body: <TapMenu tapMenu={this.state.masterTapMenu} />
      }
    }
  }

  render() {
    let currentlyVisibleState = this.setVisibility();
    return (
      <>
        <Header />
        {currentlyVisibleState.body}
        <Footer />
      </>
    );
    }  
}

export default App;
