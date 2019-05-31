import {Component} from "react";

class Expander extends Component {
  state = {
    expanded: false
  };

  handleExpandChange = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  render() {
    const { children } = this.props;
    return children({
      expanded: this.state.expanded,
      handleExpandChange: this.handleExpandChange
    });
  }
}

export default Expander;
