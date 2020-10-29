import React from "react";

class ShopList extends React.Component {

    handleItemClicked = (item) => {
    const {onItemRemoved} = this.props;
    onItemRemoved(item);  
    }

    render() {
        const {shoppingList} = this.props;
        const listItems = shoppingList.map((item) => {
            return <li onClick = {() => this.handleItemClicked(item)}class = "shoplist__item">{item}</li>
        });
        return (
            <ul class = "shoplist">
             {listItems}
            </ul>
        )
    }
}

export default ShopList;