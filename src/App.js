import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Light = styled.div`
    border-radius:50%;
    padding:1rem;
    font-size:1.5rem;
    background-color:${props => props.color || "black"};
    color:white;
    width:50px;
    height:50px;
    margin-top: 1rem;
`;


class Traffic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      red: false,
      yellow: false,
      green: false,
      button: true
    }

    this.handleToggleTraffic = this.handleToggleTraffic.bind(this);
  }

  handleToggleTraffic() {
    let status = this.state.button

    switch (status) {
      case true:

        Promise.resolve()
          .then(() => this.handleLight('red'))
          .then(() => this.delay(1000))
          .then(() => this.handleLight('green'))
          .then(() => this.delay(1000))
          .then(() => this.handleLight('yellow'))
          .then(() => this.delay(1000))
          .then(() => this.handleLight('red'))
          .then(() => this.delay(1000))
          .then(() => this.handleLight('green'))
          .then(() => this.delay(1000))
          .then(() => this.handleLight('yellow'))
          .then(() => this.delay(1000))


        this.setState({ button: false });
        break;
      case false:

        this.setState({ button: true, red: false, yellow: false, green: false })
        break;

      default:
        break;
    }


  }

  handleLight(color) {

    switch (color) {
      case 'red':
        this.setState({ yellow: false })
        this.setState({ red: true })
        break;
      case 'yellow':
        this.setState({ green: false })
        this.setState({ yellow: true })
        break;
      case 'green':
        this.setState({ red: false })
        this.setState({ green: true })
        break;
      default:
        break;
    }

  }

  delay(duration) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), duration);
    });
  }

  render() {
    return (
      <div className="back">
        <div className="traffic-lights">
          <Light color={this.state.red ? "red" : "black"} />
          <Light color={this.state.yellow ? "yellow" : "black"} />
          <Light color={this.state.green ? "green" : "black"} />
        </div>
        <button className="button" style={{ background: this.state.button ? "green" : "red" }} onClick={this.handleToggleTraffic}>{this.state.button ? "Start traffic" : "Stop traffic"}</button>

      </div>
    )
  }
}




export default Traffic;
