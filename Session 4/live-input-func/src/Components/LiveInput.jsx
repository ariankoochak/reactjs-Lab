import React, { Component } from 'react'

export default class LiveInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPass : "pass",
        }
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleChangePass(e){
        this.setState({myPass : e.target.value})
    }

    render() {
        return (
            <>
            <input type="text" value={this.state.myPass} onChange={(e)=>{this.setState({myPass : e.target.value})}}/>
            <p>live : {this.state.myPass}</p>
            </>
        );
    }
}
