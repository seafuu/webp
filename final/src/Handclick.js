import React from 'react'
const Title = (props) => { 
    return ( 
      <h1 onClick={props.handleClick}>{props.text}</h1> 
    ) 
  } 
  class Handclick extends React.Component { 
    constructor() { 
      super(); 
      this.state = { 
        counter : 1 
      } 
      this.handleClick = this.handleClick.bind(this); 
    } 
    handleClick() { 
      this.setState({ 
        counter: this.state.counter + 1 
      }) 
    } 
    render() { 
      return ( 
        <div> 
          <Title handleClick={this.handleClick} text={this.state.counter}/> 
        </div> 
      ) 
    } 
  } 
  export default Handclick;