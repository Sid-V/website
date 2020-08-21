import React, { useState, useEffect } from "react";
import { Header, Grid, Flag, Divider, Container, Loader } from "semantic-ui-react";

import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactForm from "./ContactForm";
import { Carousel } from "react-responsive-carousel";

export function Home() {
  const [carousel, setCarousel] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://sidv-website-api.azurewebsites.net/api/carousel")
      .then((response) => response.json())
      .then((json) => {
        setCarousel(json);
        setIsLoaded(true);
      })
      .catch((error) => console.log("error with fetch", error));
  }, []);

  const carouselPics = carousel.map((pic, i) => {
    return <img src={pic.link} alt={i} key={i} />;
  });

  return (
    <div className="Home">
      <Header size="huge">
        <big>
          <big>
            <big>Sidharth Venkatesh</big>
          </big>
        </big>
      </Header>
      <div className="padded-grid">
        <Loader active={!isLoaded} />
        <Container fluid>
          <Grid centered columns={2} padded divided doubling>
            <Grid.Row>
              <Grid.Column width={10}>
                <Carousel
                  autoPlay={true}
                  transitionTime={1000}
                  interval={4000}
                  showArrows={true}
                  showIndicators={true}
                  showStatus={false}
                  showThumbs={false}
                  dynamicHeight={true}
                  infiniteLoop={true}
                  swipeable={true}
                >
                  {carouselPics}
                </Carousel>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="item-centered">
                  <h2>Purdue University - Computer Science '21</h2>
                  <h2>
                    Welcome to my personal website! It's a place where I showcase things that
                    wouldn't normally fit on a 1-page resume
                  </h2>
                  <h2>
                    Navigate through the navbar to see the work I've done and the projects I've
                    completed (ooh, and also some fun photos)
                  </h2>
                  <h3>
                    Connect with me on any of the social media below or send me a message through
                    the contact form
                  </h3>
                  <Flag name="india" />
                  <Flag name="united states" />
                </div>
              </Grid.Column>
            </Grid.Row>
            <Divider hidden />
          </Grid>
        </Container>
      </div>
      <ContactForm />
    </div>
  );
}
