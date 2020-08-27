import React, {Component} from "react";

class Content extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.contentProp}</h2>
            </div>
        );
    }
}

export default Content