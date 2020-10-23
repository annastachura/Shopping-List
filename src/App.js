import React from 'react';
import Header from "./Components/Header";
import ShopList from "./Components/ShopList";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header></Header>
      <ShopList></ShopList>
      </div>
    )
  }
}
export default App;
