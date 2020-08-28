import React, {Component} from "react";

class List extends Component {
    render() {
        return(
          <ul>
              <li>
                  {this.props.data.name}
              </li>
          </ul>
        );
    }
}

export default List;