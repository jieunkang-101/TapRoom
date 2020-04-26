import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TapMenu from './TapMenu';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm';
import '../App.css';
import TapDetail from './TabDetail';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTabMenu: true,
      addingTap: false,
      selectedTap: null,
      editingTap: false,
      masterTapMenu: [
        {
          id: "b7c6018c-fff0-44b7-9df3-49bd798d33b2",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr4-0GqixCFrqtZ8bEgiwkRdGYXcyNlD0TpX3PMwzJx4b9r8SS&usqp=CAU",
          name: "MIRROR POND PALE ALE",
          brand: "DESCHUTES",
          price: "12",
          abv: "12",
          pints: 124,
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
          pints: 3,
          message:"Almost Empty"
        }
      ]
    }
  }      

  handleToHome = () => {
    this.setState({
      showTabMenu: true,
      addingTap: false,
      editingTap: false,
      selectedTap: null
    });
  }  

  handleAddTapClick = () => {
    this.setState({
      addingTap: true,
      showTabMenu: false,
      selectedTap: null,
      editingTap: false
    });
  }  

  handleAddNewTap = (newTap) => {
    const newMessage = "Enough";
    const newTapWithMessage = {...newTap, message: newMessage}
    const newTapMenu = this.state.masterTapMenu.concat(newTapWithMessage);
    this.setState({
      masterTapMenu: newTapMenu,
      addingTap: false,
      showTabMenu: true,
      selectedTap: null,
      editingTap: false,
    });
  }

  handleTapSelection = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    this.setState({
      selectedTap: selectedTap,
      showTabMenu: false
    });
  }

  handleSellPint = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    const leftPints = selectedTap.pints > 0 ? selectedTap.pints -= 1 : 0;
    const updatedPintTap = {...selectedTap, pints: leftPints};
    const newMessage = updatedPintTap.pints < 10 ? "Almost Empty": "Enough";
    const updateMsgTap = {...updatedPintTap, message: newMessage};
    const emptyMessage = updateMsgTap.pints == 0 ? "Out of Stock!": newMessage;
    const finalUpdateTap = {...updateMsgTap, message: emptyMessage};
    const newTapMenu = this.state.masterTapMenu
      .filter(tap => tap.id !== id)
      .concat(finalUpdateTap);
    this.setState({
      masterTapMenu: newTapMenu,  
      showTabMenu: true, 
      selectedTap: null}); 
  }

  handleRestockTap = (id) => {
    const selectedTap = this.state.masterTapMenu.filter(tab => tab.id === id)[0];
    const restockPints = selectedTap.pints += 124;
    const updatedPintTap = {...selectedTap, pints: restockPints};
    const newMessage = "Enough";
    const updateMsgTap = {...updatedPintTap, message: newMessage};
    const newTapMenu = this.state.masterTapMenu
      .filter(tap => tap.id !== id)
      .concat(updateMsgTap);
    this.setState({masterTapMenu: newTapMenu});
  }

  handleDeleteTap = (id) => {
    const newTapMenu = this.state.masterTapMenu.filter(tap => tap.id !== id);
    this.setState({
      masterTapMenu: newTapMenu,
      selectedTap: null, 
      showTabMenu: true
    });
  }

  handleEditClick = () => {
    this.setState({
      editingTap: true,
      addingTap: false,
      showTabMenu: false
    });
  }

  handleEditTap = (tapToEdit) => {
    const editedNewTapMenu = this.state.masterTapMenu
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
      masterTapMenu: editedNewTapMenu,
      editingTap: false,
      selectedTap: null,
      showTabMenu: true
    });  
  }


  setVisibility = () => {
    if (this.state.editingTap) {
      return {
        body: <EditTapForm tap = {this.state.selectedTap} onEditTap={this.handleEditTap} />
      }
    } else if (this.state.selectedTap != null) {
      return {      
        body: <TapDetail tap={this.state.selectedTap} onRestockTap={this.handleRestockTap} onEditClick={this.handleEditClick} onDeleteTap={this.handleDeleteTap} />
      }
    } else if (this.state.addingTap) {
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
        <Footer onClickToHome={this.handleToHome} />
      </>
    );
    }  
}

export default App;
