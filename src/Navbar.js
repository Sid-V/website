import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="huge" fluid>
        <Menu.Item as={Link} to="/" name="Home" active={activeItem === "Home"} onClick={this.handleItemClick}>
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/gallery"
          name="Gallery"
          active={activeItem === "Gallery"}
          onClick={this.handleItemClick}
        >
          Gallery
        </Menu.Item>

        <Menu.Item
          href="https://drive.google.com/open?id=1qxgsbqucXccKLcHIOhPdimjkNTSEUAku"
          name="Resume"
          target="_blank"
          rel="noopener noreferrer"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
        >
          Resume
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/experience"
          name="Experience"
          active={activeItem === "Experience"}
          onClick={this.handleItemClick}
        >
          Experience
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>
      </Menu>
    );
  }
}
