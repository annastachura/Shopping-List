import React from "react";


class Header extends React.Component {
    inputRef = React.createRef()

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            const {onItemAdded} = this.props;
           if(this.inputRef.current.value != "") {
            onItemAdded(this.inputRef.current.value);
            this.inputRef.current.value = "";
           }
        }


    }

    render () {
        
        return (
            <div class = "header">
                <input onKeyDown = {this.onKeyPress}ref = {this.inputRef}class = "header__input"></input>
            </div>
        )
    }
}


export default Header;