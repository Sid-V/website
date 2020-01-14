import React from "react";
import { Header, Grid, Flag, Divider, Responsive, Container } from "semantic-ui-react";

import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactForm from "./ContactForm";
import { Carousel } from "react-responsive-carousel";

import pic from "./assets/picture.jpg";
import pic13 from "./assets/about/pic13.JPG";
import pic5 from "./assets/about/pic5.jpg";
import pic12 from "./assets/about/pic12.JPG";
import pic14 from "./assets/about/pic14.JPG";

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
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    dynamicHeight={true}
                    infiniteLoop={true}
                  >
                    <img src={pic} />

                    <img src={pic5} />

                    <img src={pic13} />

                    <img src={pic12} />

                    <img src={pic14} />
                  </Carousel>
                </Grid.Column>
                <Grid.Column width={6}>
                  <div className="item-centered">
                    <h3>Purdue University - Computer Science</h3>
                    <h3>Class of 2021</h3>
                    <h3>
                      Welcome to my personal website! It's a place where I showcase things that wouldn't normally fit on
                      a 1-page resume.
                    </h3>
                    <h4>Send me a message through the contact form if there is anything you'd like to say :)</h4>
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
