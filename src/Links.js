import React from "react";
import { Container, Icon } from "semantic-ui-react";

import "./App.css";

export default class Links extends React.Component {
  render() {
    return (
      <Container>
        <a
          href="https://www.linkedin.com/in/sidharth-venkatesh/"
          target="_blank"
          rel="noopener noreferrer"
          className="padded-links"
        >
          <Icon name="linkedin" size="huge" />
        </a>
        <a href="https://github.com/Sid-V" target="_blank" rel="noopener noreferrer" className="padded-links">
          <Icon name="github" size="huge" />
        </a>
        <a
          href="https://www.facebook.com/sidharth.venkatesh"
          target="_blank"
          rel="noopener noreferrer"
          className="padded-links"
        >
          <Icon name="facebook" size="huge" />
        </a>
        <a href="mailto:sidv@purdue.edu" target="_blank" rel="noopener noreferrer" className="padded-links">
          <Icon name="mail" size="huge" />
        </a>
        <a href="https://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer">
          <p>Built from scratch with React + Semantic UI</p>
        </a>
      </Container>
    );
  }
}
