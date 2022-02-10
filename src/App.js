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
      color: -1,
      button: false
    }
    this.timer = null
    this.handleToggleTraffic = this.handleToggleTraffic.bind(this);
  }

  handleToggleTraffic(status) {
    this.setState({ button: status })
    console.log(status)
    let current = -1

    if (status) {
      this.timer = setInterval(() => {

        if (current < 2) {
          current = current + 1
        }
        else {
          current = 0
        }
        this.setState({ color: current })

      }, 1000)

    } else {
      clearInterval(this.timer)
      this.setState({ color: -1 })
    }
  }

  render() {
    return (
      <div className="back">
        <div className="traffic-lights">
          <Light color={this.state.color === 2 ? "red" : "black"} />
          <Light color={this.state.color === 1 ? "yellow" : "black"} />
          <Light color={this.state.color === 0 ? "green" : "black"} />
        </div>
        <button className="button" style={{ background: !this.state.button ? "green" : "red" }} onClick={() => this.handleToggleTraffic(!this.state.button)}>{!this.state.button ? "Start traffic" : "Stop traffic"}</button>

      </div>
    )
  }
}




export default Traffic;
