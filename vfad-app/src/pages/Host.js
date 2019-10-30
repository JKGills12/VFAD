import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Host() {
  return (
    <div>
      <Hero backgroundImage="http://luxseattle.com/wp-content/uploads/2013/11/Modern-Waterfront-Home-on-Mercer-Island.jpg">
        <h1>Have space you want to rent out?</h1>
        <h2>Be a Host!</h2>
        <h2></h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome HOST! Register your property and manage guests here!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Do you have a rental property for short-term listing in the Seattle area?
              Are you interested in the finding the best location to crash and stay locally?
              Say goodbye to the everyday grind with an exciting vacation to this vibrant city.
              Find the perfect vacation home, space, room or outdoor venue to rent and discover the limitless activities and attractions that these destinations have to offer.

            </p>
            <h2>Why be a Host?</h2>
           <p>
              Enjoy easy passive income from renting out an extra room that is barely used. 
              Why stop at just rooms or outdoor spaces? Go ahead and rent out your couch, extra mattress, driveway and back yard with a tent to enjoy even more earnings! 
              By using the full space of your property, you can quickly accumulate maximum revenue by efficiently using all available space! 
              Beautiful waterfront properties are waiting for you or non-affluent areas with used couches and mattresses! 
              </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Host;