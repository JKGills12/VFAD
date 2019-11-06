import React from "react";
import reactDOM from "react-dom";
import "./Login.css";
import api from "../utils/api";

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }
  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };
  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    let userInfo = { username: this.state.username, password: this.state.password };
    api.authentication(userInfo)
      .then(res => {
        console.log(res);
        console.log("should be the msg: ", res.data);
        alert(res.data);
      })
    this.setState({ username: "", password: "" });
  };

  constructor(props){
    super(props);
    this.state = {isLoginOpen: true, isRegisterOpen: false };
  }

showLoginBox() {
  this.setState({isLoginOpen: true, isRegisterOpen: false })
}  
showRegisterBox() {
  this.setState({isRegisterOpen: true, isLoginOpen: false })
}

  render() {
   
    return (
      
    <div className="root-container">
      <div className="outer-container">
      
      <div className="box-controller">
        <div className="controller"
        onClick={this.showLoginBox.bind(this)}>
          Login
        </div>
        <div className="controller"
        onClick={this.showRegisterBox.bind(this)}>
          Sign Up
        </div>
      </div>
      <div className="box-container">
        {this.state.isLoginOpen && <LoginBox />}
        {this.state.isRegisterOpen && <RegisterBox />}
      </div>
      </div>
    </div>);
  }
}
class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitLogin(e) {
  }

  render() {
    return (

      <div className="inner-container">
        <div className="header" action="/" method="post">
          Login
    </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username {this.state.username}</label>
            <input type="text" name="username" className="login-input" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password {this.state.password} </label>
            <input type="text" name="password" className="login-input" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
          </div>
          <button type="button" className="login-btn" onClick={this.handleFormSubmit}>Submit</button>
        </div>

      </div>

    );
  }

  render() {
  return (
   
  <div className="inner-container">
    <div className="header" action="/" method="post">
      Login
    </div>
    <div className="box">
      <div className="input-group">
        <label htmlFor="username">Username {this.state.username}</label>
        <input type="text" name="username" className="login-input" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password {this.state.password} </label>
        <input type="text" name="password" className="login-input" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
      </div>

      <button type="button" className="login-btn" onClick={this.handleFormSubmit}>Submit</button>

    </div>
   
  </div>
  
  );
}
}
class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitRegister(e) {
  }
  render() {
    return (
      <div className="inner-container">
        <div className="header" action="/" method="post">
          Sign Up
    </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username {this.state.username}</label>
            <input type="text" name="username" className="login-input" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password {this.state.password}</label>
            <input type="text" name="password" className="login-input" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
          </div>
          <button type="button" className="login-btn" onClick={this.handleFormSubmit}>Submit</button>
        </div>

      </div>
    );
  }
}
reactDOM.render(<Login />, document.getElementById("root"));

export default Login;