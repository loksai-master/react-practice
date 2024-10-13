import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor called");
  }

  componentDidMount() {
    // after component rendered
    console.log("component did mount called");
  }

  componentDidUpdate(prevProps, prevState) {
    //logic when state changes
    // if(this.state.count !== prevState.count){
    // }
  }
  componentWillUnmount() {
    //clean up logic
    //Example: clearing timers
  }
  render() {
    console.log("component rendered");

    const { name = "" } = this.props;
    let { count = 0 } = this.state;
    return (
      <>
        <h2>count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          counter
        </button>
        <h1>This is a class component written by {name}</h1>
      </>
    );
  }
}

export default AboutClass;
