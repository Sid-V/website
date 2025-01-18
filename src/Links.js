import React from "react";
import { Container, Icon, Divider, Grid } from "semantic-ui-react";

import "./App.css";

export default class Links extends React.Component {
  render() {
    return (
      <div className="page-center">
        <Grid columns={5} container>
          <Grid.Row>
            <Grid.Column>
              <a
                href="https://www.linkedin.com/in/sidharth-venkatesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="padded-links"
              >
                <Icon name="linkedin" size="huge" />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a
                href="https://github.com/Sid-V"
                target="_blank"
                rel="noopener noreferrer"
                className="padded-links"
              >
                <Icon name="github" size="huge" />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a
                href="https://www.instagram.com/sid.v_"
                target="_blank"
                rel="noopener noreferrer"
                className="padded-links"
              >
                <Icon name="instagram" size="huge" />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a
                href="https://www.facebook.com/sidharth.venkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="padded-links"
              >
                <Icon name="facebook" size="huge" />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a
                href="mailto:sidv1799@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="padded-links"
              >
                <Icon name="mail" size="huge" />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Container>
          <a href="https://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer">
            <p>Built from scratch with React + Semantic UI</p>
          </a>
        </Container>
      </div>
    );
  }
}
