import React from "react";


class AlreadyBought extends React.Component {
    render() {
        const {alreadyBoughtList} = this.props;
        const alreadyBoughtItem = alreadyBoughtList.map((item) => {
        return <li className = "bought__item">{item}</li>
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