import React from "react"



class ProductSuggestionList extends React.Component {
     products = ["kapusta", "kalafior", "pomidor", "pomarańcza"];
    render () {
        return (
            <div class = "product">
                <ul class = "product__list">
                    <li class = "product__item"></li>
                </ul>
            </div>
        )
    }
}

export default ProductSuggestionList;