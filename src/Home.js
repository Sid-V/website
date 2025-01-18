import React from "react";
import { Header, Grid, Divider, Container } from "semantic-ui-react";

import "./App.css";
import ContactForm from "./ContactForm";

export function Home() {
  return (
    <div className="Home">
      <Header 
        as='h1' 
        size='huge'
        style={{
          fontSize: '3.5em',
          fontWeight: 'bold',
          color: '#2185d0',  // Semantic UI's blue
          margin: '40px 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        Sidharth Venkatesh
      </Header>
      
      <div className="home-image-container">
        <img 
          src="https://sidvwebsitestorage.blob.core.windows.net/websiteimages/home_pic.jpg"
          alt="Home"
          style={{
            maxWidth: '40%',
            height: 'auto',
            margin: '20px 0',
            padding: '15px'
          }}
        />
      </div>

      <div className="padded-grid">
        <Container fluid>
          <Grid centered columns={2} padded divided doubling>
            <Grid.Row>
              <Grid.Column width={16}>
                <div className="item-centered">
                  <h1>
                    Welcome to my personal website! Here are the projects I've worked on over the past few years
                  </h1>
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
