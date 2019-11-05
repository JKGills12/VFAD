import React from "react";
import reactDOM from "react-dom";

// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Navbar from "../components/Navbar";
import "./Login.css";
import Footer from "../components/Footer";
// import api from "../utils/api";

class Login extends React.Component {

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
    <div className="header">
      Login
    </div>
    <div className="box">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className="login-input" placeholder="Username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" className="login-input" placeholder="Password" />
      </div>

      <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Submit</button>

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
    <div className="header">
      Sign Up
    </div>
    <div className="box">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className="login-input" placeholder="Username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" className="login-input" placeholder="Password" />
      </div>

      <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Login</button>

    </div>
    <Footer />
  </div>
  );}

}

reactDOM.render(<Login />, document.getElementById("root"));


//   state = {
//     username: '',
//     password: '',

//   }




//   // handle any changes to the input fields
//   handleInputChange = event => {
//     // Pull the name and value properties off of the event.target (the element which triggered the event)
//     const { name, value } = event.target;

//     // Set the state for the appropriate input field
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, prevent the default event and alert the username and password
//   handleFormSubmit = event => {
//     event.preventDefault();
//     let userInfo ={ username: this.state.username, password: this.state.password};
//     api.authetication(userInfo)
//     .then(res => {
//       console.log(res)
//     })
//     this.setState({ username: "", password: "" });
//   };

//   render() {
//     return (
 
//       <form action="/" method="post">
//         <p>Username: {this.state.username}</p>
//         <p>Password: {this.state.password}</p>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={this.state.username}
//           onChange={this.handleInputChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//         />
//         <button onClick={this.handleFormSubmit}>Submit</button>
//       </form>
//     );
//   }
// }

export default Login;
