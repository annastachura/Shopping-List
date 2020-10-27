import React from "react";

class ShopList extends React.Component {
    render() {
        const {shoppingList} = this.props;
        const listItems = shoppingList.map((item) => {
            return <li class = "shoplist__item">{item}</li>
        });
        return (
            <ul class = "shoplist">
             {listItems}
            </ul>
        )
    }
}

export default ShopList;