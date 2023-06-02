import React, { Component } from 'react'

export default class LiveInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPass : "",
            hide : false,
        }
    }

    handleChangePass = (e)=>{
        this.setState({myPass : e.target.value})
    }

    render() {
        return (
            <>
                <input
                    type={this.state.hide ? "password" : "text"}
                    value={this.state.myPass}
                    onChange={this.handleChangePass}
                    placeholder="Enter your password"
                />
                <br />
                <p>Live : {this.state.myPass}</p>
                <br />
                <button
                    onClick={() => {
                        this.setState({ hide: !this.state.hide });
                    }}
                >
                    {this.state.hide ? "show" : "hide"}
                </button>
            </>
        );
    }
}
