import React, { Component } from 'react';
import fire from "../config/Fire";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.signin = this.signin.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }

    signin(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
    }


    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log();
        })
        .catch((error) => {
         console.log(error);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div>
                <form>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  onChange={this.handleChange} type="email"
                     className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                     placeholder="Enter email" name="email" />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div> <br/>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" onChange={this.handleChange} type="password"
                     className="form-control" id="exampleInputPassword1" 
                     placeholder="Password" />
                </div> <br/>

                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}

                <button onClick={this.signin} className="btn btn-primary"> Sign In</button>

                <button onClick={this.signup} className="btn btn-primary"> Sign Up</button>

                </form>

            </div>
        );
    }
}

export default SignIn;
