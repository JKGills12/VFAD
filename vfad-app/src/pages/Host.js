import React, { Fragment, Component } from "react";
import Hero from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../utils/api";

//================================================================================================================

// // Sending data to db
class Host extends Component {
  constructor(props) {
    super(props)
    this.emailInput = React.createRef()
    this.passwordInput = React.createRef()
    this.firstnameInput = React.createRef()
    this.lastnameInput = React.createRef()
    this.addressInput = React.createRef()
    this.address2Input = React.createRef()
    this.cityInput = React.createRef()
    this.passwordInput = React.createRef()
    this.stateInput = React.createRef()
    this.zipInput = React.createRef()


  }
  // Initialize this.state.host as an empty array
  state = {
    host: [],
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  };


  handleInputChange = () => {
    const email = this.emailInput.current.value
    const password = this.passwordInput.current.value
    const firstname = this.firstnameInput.current.value
    const lastname = this.lastnameInput.current.value
    const address = this.addressInput.current.value
    const address2 = this.address2Input.current.value
    const city = this.cityInput.current.value
    const state = this.stateInput.current.value
    const zip = this.zipInput.current.value
    this.setState({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      address: address,
      address2: address2,
      city: city,
      state: state,
      zip: zip


    })

  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.saveHost({
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    })
      .then(res => {
        console.log(res)
      })

    this.setState({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  //================================================================================================================
  render() {
    return (
      <Fragment>
        <div>
          <Hero backgroundImage="http://luxseattle.com/wp-content/uploads/2013/11/Modern-Waterfront-Home-on-Mercer-Island.jpg">
            <h1>Have space you want to rent out?</h1>
            <h2>Be a Host!</h2>
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1>
                  Welcome HOST! Register your property and manage guests here!
              </h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <p>
                  Do you have a rental property for short-term listing in the
                  Seattle area? Are you interested in the finding the best
                  location to crash and stay locally? Say goodbye to the everyday
                  grind with an exciting vacation to this vibrant city. Find the
                  perfect vacation home, space, room or outdoor venue to rent and
                  discover the limitless activities and attractions that these
                  destinations have to offer.
              </p>
                <h2>Popular Locations</h2>
                <p>
                  In Seattle you simply can’t skip the Central Public Library – a
                  modern architectural marvel of glass grids, unusual shapes, and
                  a “book spiral” that climbs four stories. Stroll over to Pike
                  Place Market to visit the original Starbucks and play catch with
                  a fishmonger. In the heart of the city lies Chihuly Garden and
                  Glass, which will dazzle you with its colorful and delicate
                  works. Glide to the top of the Space Needle for panoramic views
                  of the surrounding mountain ranges and Puget Sound.
              </p>
                <h2>Why be a Host?</h2>
                <p>
                  Enjoy easy passive income from renting out an extra room that is
                  barely used. Why stop at just rooms or outdoor spaces? Go ahead
                  and rent out your couch, extra mattress, driveway and back yard
                  with a tent to enjoy even more earnings! By using the full space
                  of your property, you can quickly accumulate maximum revenue by
                  efficiently using all available space! Beautiful waterfront
                  properties are waiting for you or non-affluent areas with used
                  couches and mattresses!
              </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <h2>Sign Up:</h2>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={this.emailInput} onChange={this.handleInputChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={this.passwordInput} onChange={this.handleInputChange} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="First Name" placeholder="First Name" ref={this.firstnameInput} onChange={this.handleInputChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Last Name" placeholder="Last Name" ref={this.lastnameInput} onChange={this.handleInputChange} />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" ref={this.addressInput} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" ref={this.address2Input} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control ref={this.cityInput} onChange={this.handleInputChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" ref={this.stateInput} onChange={this.handleInputChange} >
                  <option>Choose...</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control ref={this.zipInput} onChange={this.handleInputChange} />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
              Submit
          </Button>
          </Form>
        </Container>
      </Fragment>
    );
  }
}
export default Host;

// import React, { Component } from "react";
// import Hero from "../components/Hero";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// class Host extends Component {

//   state = {

//   }


//   render() {

//     return (
//       <div>
//         <div>
//           <Hero backgroundImage="http://luxseattle.com/wp-content/uploads/2013/11/Modern-Waterfront-Home-on-Mercer-Island.jpg">
//             <h1>Have space you want to rent out?</h1>
//             <h2>Be a Host!</h2>
//           </Hero>
//           <Container style={{ marginTop: 30 }}>
//             <Row>
//               <Col size="md-12">
//                 <h1>
//                   Welcome HOST! Register your property and manage guests here!
//               </h1>
//               </Col>
//             </Row>
//             <Row>
//               <Col size="md-12">
//                 <p>
//                   Do you have a rental property for short-term listing in the
//                   Seattle area? Are you interested in the finding the best
//                   location to crash and stay locally? Say goodbye to the everyday
//                   grind with an exciting vacation to this vibrant city. Find the
//                   perfect vacation home, space, room or outdoor venue to rent and
//                   discover the limitless activities and attractions that these
//                   destinations have to offer.
//               </p>
//                 <h2>Popular Locations</h2>
//                 <p>
//                   In Seattle you simply can’t skip the Central Public Library – a
//                   modern architectural marvel of glass grids, unusual shapes, and
//                   a “book spiral” that climbs four stories. Stroll over to Pike
//                   Place Market to visit the original Starbucks and play catch with
//                   a fishmonger. In the heart of the city lies Chihuly Garden and
//                   Glass, which will dazzle you with its colorful and delicate
//                   works. Glide to the top of the Space Needle for panoramic views
//                   of the surrounding mountain ranges and Puget Sound.
//               </p>
//                 <h2>Why be a Host?</h2>
//                 <p>
//                   Enjoy easy passive income from renting out an extra room that is
//                   barely used. Why stop at just rooms or outdoor spaces? Go ahead
//                   and rent out your couch, extra mattress, driveway and back yard
//                   with a tent to enjoy even more earnings! By using the full space
//                   of your property, you can quickly accumulate maximum revenue by
//                   efficiently using all available space! Beautiful waterfront
//                   properties are waiting for you or non-affluent areas with used
//                   couches and mattresses!
//               </p>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//         <Container>
//           <h2>Sign Up:</h2>
//           <Form method="post" action="/addhost">
//             <Form.Row>
//               <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//               </Form.Group>
//             </Form.Row>

//             <Form.Row>
//               <Form.Group as={Col} controlId="formGridFirstName">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control type="First Name" placeholder="First Name" />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridLastName">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control type="Last Name" placeholder="Last Name" />
//               </Form.Group>
//             </Form.Row>

//             <Form.Group controlId="formGridAddress1">
//               <Form.Label>Address</Form.Label>
//               <Form.Control placeholder="1234 Main St" />
//             </Form.Group>

//             <Form.Group controlId="formGridAddress2">
//               <Form.Label>Address 2</Form.Label>
//               <Form.Control placeholder="Apartment, studio, or floor" />
//             </Form.Group>

//             <Form.Row>
//               <Form.Group as={Col} controlId="formGridCity">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridState">
//                 <Form.Label>State</Form.Label>
//                 <Form.Control as="select">
//                   <option>Choose...</option>
//                   <option>...</option>
//                 </Form.Control>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridZip">
//                 <Form.Label>Zip</Form.Label>
//                 <Form.Control />
//               </Form.Group>
//             </Form.Row>

//             <Form.Group id="formGridCheckbox">
//               <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit
//           </Button>
//           </Form>
//         </Container>
//       </div>
//     )
//   };
// }

// export default Host;
