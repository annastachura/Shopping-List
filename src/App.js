import React from 'react';
import Header from "./Components/Header";
import ShopList from "./Components/ShopList";
import AlreadyBought from "./Components/AlreadyBought";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      shoppingList: [
        "pomidor", "cola", "papier"
      ]
    }
  }

  addNewItemToShoppingList = (item) => {
    this.setState (prevState => {
const newShoppingList = [...prevState.shoppingList, item];
  return {shoppingList: newShoppingList};
    })
  }

  
  render() {
    const {shoppingList} = this.state;
    return (
      <div>
      <Header onItemAdded= {this.addNewItemToShoppingList}></Header>
      <ShopList shoppingList = {shoppingList}></ShopList>
      <AlreadyBought></AlreadyBought>
      </div>
    )
  }
}
export default App;
