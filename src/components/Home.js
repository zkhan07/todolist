import React, { Component } from 'react';
import fire from "../config/Fire";
import Appbar from "./Appbar";
import List from "./List";

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <Appbar />
                You are home
                <button onClick={this.logout}> Logout </button>
                <br/><br/>

                <List />

            </div>
        );
    }
}

export default Home;
