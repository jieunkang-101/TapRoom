import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TapMenu from './TapMenu';
import NewTapForm from './NewTapForm';
import '../App.css';
import { v4 } from 'uuid';
import TapDetail from './TabDetail';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTabMenu: true,
      addingTab: false,
      selectedTap: null,
      masterTapMenu: [
        {
          id: "b7c6018c-fff0-44b7-9df3-49bd798d33b2",
          // id: v4(),
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr4-0GqixCFrqtZ8bEgiwkRdGYXcyNlD0TpX3PMwzJx4b9r8SS&usqp=CAU",
          name: "MIRROR POND PALE ALE",
          brand: "DESCHUTES",
          price: "12",
          abv: "12",
          pints: 3,
          message:"Enough"
        },
        {
          id: "8ade42f5-28c7-43b8-a286-f062ecc5b541",
          img: "https://pbs.twimg.com/profile_images/1118565165480337408/hTb40HYf.png",
          name: "CZECH-STYLE PILSNER",
          brand: "BUOY",
          price: "11",
          abv: "9.8",
          pints: 12,
          message:"Enough"
        },
        {
          id: "891cb0aa-84e5-49a4-89db-84f4be7b873e",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAk98i_WUT93Ab5sOy0uCIjIkA4rQUYVRM_P_nyifr3P34a5la&usqp=CAU",
          name: "Barrel Aged IPA",
          brand: "GIGANTIC",
          price: "13",
          abv: "11.4",
          pints: 124,
          message:"Enough"
        },
        {
          id: "1e33d1d1-0f92-4eac-b29f-cad63625b710",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9z4LT7645EIuXtmxydA-Axpv0eh9m8CLr0HVOAi6_AuRh1zdq&usqp=CAU",
          name: "Mosaic Hopped CREAM ALE",
          brand: "BRIDGEPORT",
          price: "10.5",
          abv: "10",
          pints: 124,
          message:"Enough"
        }
      ]
    }
  }      

  handleToHome = () => {
    this.setState({
      showTabMenu: true,
      addingTab: false,
      selectedTap: null
    });
  }  

  handleAddTapClick = () => {
    this.setState({
      addingTab: true,
      showTabMenu: false,
      selectedTap: null
    });
  }  

  handleAddNewTap = (newTap) => {
    const newTapMenu = this.state.masterTapMenu.concat(newTap);
    this.setState({masterTapMenu: newTapMenu,
      addingTab: false,
      showTabMenu: true,
      selectedTap: null
    });
  }

  handleTapSelection = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    this.setState({selectedTap: selectedTap,
      showTabMenu: false
    });
  }

  handleSellPint = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    selectedTap.pints > 0 ? selectedTap.pints -- : selectedTap.message = "Out of stock!";
    // if (selectedTap.pint > 10) {
    //   selectedTap.pints -- ;
    // } else if ( 1 < selectedTap.pint < 10) {
    //   selectedTap.pints -- ;
    //   selectedTap.message = "Almost Empty";
    // } else {
    //   selectedTap.pints === 0;
    //   selectedTap.message = "Out of Stock!";
    // } 
    //console.log(selectedTap.pints);
    const newTapMenu = this.state.masterTapMenu.filter(tap => tap.id !== id).concat(selectedTap);
    this.setState({masterTapMenu: newTapMenu,  
      showTabMenu: true, 
      selectedTap: null}); 
  }

  handleRestockTap = (tapToRestock) => {
    this.state.selectedTap.message = "Enough";
    this.state.selectedTap.pints += 124;
    const newTapMenu = this.state.masterTapMenu.filter(tap => tap.id !== this.state.selectedTap.id).concat(tapToRestock);
    this.setState({masterTapMenu: newTapMenu});
  }

  handleDeleteTap = (id) => {
    const newTapMenu = this.state.masterTapMenu.filter(tap => tap.id !== id);
    this.setState({masterTapMenu: newTapMenu});
    this.setState({selectedTap: null, showTabMenu: true});
  }

  setVisibility = () => {
    if(this.state.selectedTap != null) {
      return {      
        body: <TapDetail tap={this.state.selectedTap} onRestockTap={this.handleRestockTap}  onDeleteTap={this.handleDeleteTap} />
      }
    } else if (this.state.addingTab) {
      return {
        body: <NewTapForm onNewTapCreation={this.handleAddNewTap} />
      }
    } else if (this.state.showTabMenu) {
      return {
        body: <TapMenu tapMenu={this.state.masterTapMenu} onTabClick={this.handleTapSelection} onSellPint={this.handleSellPint} />
      }
    }
  }

  render() {
    console.log(this.state);
    let currentlyVisibleState = this.setVisibility();
    return (
      <>
        <Header onClickToHome={this.handleToHome} onClickAddNewTap={this.handleAddTapClick} />
        {currentlyVisibleState.body}
        <Footer />
      </>
    );
    }  
}

export default App;
