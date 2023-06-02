import React, { Component } from 'react'
import LiveInput from './Components/LiveInput'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent : true,
        }
    }
  render() {
    return (
        <>
            <button
                onClick={() => {
                    this.setState({ showComponent: !this.state.showComponent });
                }}
            >
                {this.state.showComponent ? "Hide" : "Show"}
            </button><br />
            {this.state.showComponent && <LiveInput />}
        </>
    );
  }
}
