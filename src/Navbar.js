import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import resumeDownload from "./assets/Resume-SidharthVenkatesh.pdf";

//resume link: https://drive.google.com/file/d/1tZS6eP_4kE6Trp895IaJJJgiGisn7XCE/view?usp=sharing

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="huge" stackable fluid compact>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
          color='purple'
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/gallery"
          name="Gallery"
          active={activeItem === "Gallery"}
          onClick={this.handleItemClick}
          color='purple'
        >
          Gallery
        </Menu.Item>

        <Menu.Item
          href={resumeDownload}
          name="Resume"
          target="_blank"
          rel="noopener noreferrer"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
          download
          color='purple'
        >
          Resume
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/experience"
          name="Experience"
          active={activeItem === "Experience"}
          onClick={this.handleItemClick}
          color='purple'
        >
          Experience
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
          color='purple'
        >
          Projects
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/teaching"
          name="Teaching"
          active={activeItem === "Teaching"}
          onClick={this.handleItemClick}
          color='purple'
        >
          Teaching
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/courses"
          name="Courses"
          active={activeItem === "Courses"}
          onClick={this.handleItemClick}
          color='purple'
        >
          Courses
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/spotify"
          name="Spotify"
          active={activeItem === "Spotify"}
          onClick={this.handleItemClick}
          color='purple'
        >
          Spotify Recommender
        </Menu.Item>
      </Menu>
    );
  }
}
