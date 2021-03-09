import React from "react"


export default class MenuItem extends React.Component {
    render() {
        return (
            <h2>{this.props.itemName}</h2>
        );
    }

}
