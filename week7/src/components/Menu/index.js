import React from "react"
import MenuItem from "../MenuItem"

class ItemPrice extends React.Component {
    render() {
        return (
            <p>{this.props.itemPrice}</p>
        );
    }
}

class ItemDesc extends React.Component {
    render() {
        return (
            <p>{this.props.itemDescription}</p>
        );
    }
}

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.menuName} Menu</h1>
                <ItemPrice {...this.props.menuItems[0]}></ItemPrice>
                <MenuItem {...this.props.menuItems[0]}></MenuItem>
                <ItemDesc {...this.props.menuItems[0]}></ItemDesc>
                <button>Add to Cart</button>
                <ItemPrice {...this.props.menuItems[1]}></ItemPrice>
                <MenuItem {...this.props.menuItems[1]}></MenuItem>
                <ItemDesc {...this.props.menuItems[1]}></ItemDesc>
                <button>Add to Cart</button>
                <ItemPrice {...this.props.menuItems[2]}></ItemPrice>
                <MenuItem {...this.props.menuItems[2]}></MenuItem>
                <ItemDesc {...this.props.menuItems[2]}></ItemDesc>
                <button>Add to Cart</button>
                <ItemPrice {...this.props.menuItems[3]}></ItemPrice>
                <MenuItem {...this.props.menuItems[3]}></MenuItem>
                <ItemDesc {...this.props.menuItems[3]}></ItemDesc>
            </div>
        )
    }

}
