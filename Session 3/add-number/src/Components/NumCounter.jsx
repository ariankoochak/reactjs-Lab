import React, { Component } from 'react'





export default class NumCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myNumber : 0,
        }
    }
    render() {
        return (
            <>
                <button
                    onClick={() => {
                        this.setState({ myNumber: this.state.myNumber - 5 });
                    }}
                >
                    -5
                </button>
                <button
                    onClick={() => {
                        this.setState({ myNumber: this.state.myNumber - 1 });
                    }}
                >
                    -1
                </button>
                <p>{this.state.myNumber}</p>
                <button
                    onClick={() => {
                        this.setState({ myNumber: this.state.myNumber + 1 });
                    }}
                >
                    +1
                </button>
                <button
                    onClick={() => {
                        this.setState({ myNumber: this.state.myNumber + 5 });
                    }}
                >
                    +5
                </button>
            </>
        );
    }
}
