import React from "react";

class Typewriter extends React.Component {
  state = {
    itemToDisplay: "Front End Dev, Teacher... & Student",
    iterator: 0
  };
  componentDidMount() {
    this.typeWriter();
  }

  componentDidUpdate() {
    this.type();
  }

  componentWillUnmount() {
    clearInterval(this.typer);
  }

  type() {
    if (this.state.iterator === 0) {
      clearInterval(this.typer);
      setTimeout(this.typeWriter, 1000);
    }
  }


  typeDelete = () => {
    this.typer = setInterval(() => {
      this.setState(prevState => {
        return {
          iterator: prevState.iterator - 1
        };
      });
    }, 200);
  };

  typeWriter = () => {
    //this.getNewItem();
    this.typer = setInterval(() => {
      this.setState(prevState => {
        return {
          iterator: prevState.iterator + 1
        };
      });
    }, 200);
  };

  getNewItem = () => {
    if (this.state.iterator === 0) {
      this.setState({
        itemToDisplay: this.props.typeOptions[
          Math.floor(Math.random() * this.props.typeOptions.length)
        ]
      });
    }
  };
  render() {
    return (
        <div>{this.state.itemToDisplay.substring(0, this.state.iterator)}</div>
    );
  }
}

export default Typewriter;