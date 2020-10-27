import React from 'react';
import Header from "./Components/Header";
import ShopList from "./Components/ShopList";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      shoppingList: [
        "pomidror", "cola", "papier"
      ]
    }
  }
  render() {
    const {shoppingList} = this.state;
    return (
      <div>
      <Header></Header>
      <ShopList shoppingList = {shoppingList}></ShopList>
      </div>
    )
  }
}
export default App;
