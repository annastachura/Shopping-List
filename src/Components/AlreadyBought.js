import React from "react";


class AlreadyBought extends React.Component {

    handleMoveBackItem = (item) => {
        const {onItemBack} = this.props;
        onItemBack(item);
        

    }
    render() {
        const {alreadyBoughtList} = this.props;
        const alreadyBoughtItem = alreadyBoughtList.map((item) => {
        return <li onClick = {() => this.handleMoveBackItem(item)} className = "bought__item">{item}</li>
        })
        return (
            <div className = "bought">
                <ul className = "bought__list">
                    {alreadyBoughtItem}
                </ul>
            </div>
        )
    }
}

export default AlreadyBought;