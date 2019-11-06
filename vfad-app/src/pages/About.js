import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import './About.css';


function About() {
  return (
    <div backgroundColor="white">
      <Hero backgroundImage="https://d2ern41v4fpcqm.cloudfront.net/media/gallery/property-62369/i089793_preview.jpg">
        <h1>Garden Party? Bridal Shower? Pool Party? </h1>
        <h2>Explore VFAD's short-term property rentals today!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
      <div className="inner-container" />
        <Row>

          <Col size="md-12">
            
            <h1 className="inner-text">
              VACAY FOR A DAY (VFAD)
            </h1>
            <h2>Search for short-term property rentals today!</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Did you ever want to go to the lake on a hot summer day but avoid the masses? Maybe you need a larger space to throw an event, or don't have any room in your kitchen to make that holiday dinner. This is what VFAD sets out to solve for you. Find the perfect afternoon activity, space, outdoor venue to book today.
          
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
     
    </div>
  );
}

export default About;
