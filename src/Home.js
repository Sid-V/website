import React from "react";
import { Header, Grid, Flag, Divider, Container } from "semantic-ui-react";

import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactForm from "./ContactForm";
import { Carousel } from "react-responsive-carousel";

import pic from "./assets/picture.jpg";
import pic13 from "./assets/about/pic13.JPG";
import pic5 from "./assets/about/pic5.jpg";
import pic14 from "./assets/about/pic14.JPG";
import pic15 from "./assets/about/pic15.jpg";
import pic12 from "./assets/about/pic12.PNG";

export default class Home extends React.Component {
  render() {
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
                  >
                    <img src={pic} />

                    <img src={pic5} />

                    <img src={pic15} />

                    <img src={pic12} />

                    <img src={pic14} />

                    <img src={pic13} />
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
}
