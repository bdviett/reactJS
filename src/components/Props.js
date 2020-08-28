import React, {Component} from "react";

class Props extends Component {
    render() {
        return (
            element,
            <h1>Hello {this.props.name}</h1>
        );
    }
}

const element = <Welcome name="Sara" />;

Props.defaultProps = {
    name: "world",
};
export default Props;