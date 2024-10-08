import React from 'react';

class GokuTransform extends React.Component {
  constructor() {
    super();
    this.state = {
      transformation: "Kaioken",
      clickCount: 0 
    };
  }
  handleButtonClick = () => {
    this.setState(prevState=>{
       if(prevState.clickCount+1 === 4) {
        return {
          transformation: prevState.transformation === "Kaioken" ? "SuperSaiyan" : "Kaioken",
          clickCount: 0
        };
      } else {
        return { clickCount: prevState.clickCount+1 };
      }
  })
  }

  render() {
    return (
      <div>
        <h1>Current Transformation: {this.state.transformation}</h1>
        <button onClick={this.handleButtonClick}>Click Me</button>
        
      </div>
    );
  }
}

export default GokuTransform;