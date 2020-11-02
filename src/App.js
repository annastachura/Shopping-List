import React from 'react';
import Header from "./Components/Header";
import ShopList from "./Components/ShopList";
import AlreadyBought from "./Components/AlreadyBought";
import ProductSuggestionList from "./Components/ProductSuggestionList";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      alreadyBoughtList: []
    }
  }

  addNewItemToShoppingList = (item) => {
    this.setState(prevState => {
      const newShoppingList = [...prevState.shoppingList, item];
      return { shoppingList: newShoppingList };
    })
  }

  moveItemToAlreadyBought = (item) => {
    this.setState(prevState => {
      const newShoppingList = prevState.shoppingList.filter((value) => {
        return item != value;
      })
      return {
        shoppingList: newShoppingList,
        alreadyBoughtList: [...prevState.alreadyBoughtList, item]
      };
    })
  }

  moveItemBackToShoppingList = (item) => {
    this.setState(prevState => {
      const newShoppingList = [...prevState.shoppingList, item];
      return {
        shoppingList: newShoppingList,
        alreadyBoughtList: prevState.alreadyBoughtList.filter((value) => {
          return item != value;
        })
      };
    })
  }



  render() {
    const { shoppingList, alreadyBoughtList } = this.state;
    return (
      <div>
        <Header onItemAdded={this.addNewItemToShoppingList}></Header>
        <ProductSuggestionList></ProductSuggestionList>
        <ShopList onItemRemoved={this.moveItemToAlreadyBought} shoppingList={shoppingList}></ShopList>
        <AlreadyBought onItemBack={this.moveItemBackToShoppingList} alreadyBoughtList={alreadyBoughtList}></AlreadyBought>
      </div>
    )
  }
}
export default App;
