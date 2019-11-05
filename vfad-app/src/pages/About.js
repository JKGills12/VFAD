import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";

function About() {
  return (
    <div backgroundColor="white">
      <Hero backgroundImage="https://media.mnn.com/assets/images/2014/04/palm-tree-intro.jpg.653x0_q80_crop-smart.jpg">
        <h1>Wish you could go on a...</h1>
        <h2>Vacay for a day?</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>
              Welcome VFAD! Where you can search for short-term property and
              venue rentals!
            </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Do you have a rental property for short-term listing in the
              Seattle area? Are you interested in the finding the best location
              to crash and stay locally? Say goodbye to the everyday grind with
              an exciting vacation to this vibrant city. Find the perfect
              vacation home, space, room or outdoor venue to rent and discover
              the limitless activities and attractions that these short-term
              rentals have to offer.
            </p>
            <h2>Popular Locations</h2>
            <p>
              In Seattle you simply can’t skip the Central Public Library – a
              modern architectural marvel of glass grids, unusual shapes, and a
              “book spiral” that climbs four stories. Stroll over to Pike Place
              Market to visit the original Starbucks and play catch with a
              fishmonger. In the heart of the city lies Chihuly Garden and
              Glass, which will dazzle you with its colorful and delicate works.
              Glide to the top of the Space Needle for panoramic views of the
              surrounding mountain ranges and Puget Sound.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
