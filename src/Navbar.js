import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import resumelink from "./assets/Resume_Sidharth_Venkatesh.pdf";

//resume link: https://drive.google.com/file/d/1fu2X8iBfjCujeFewxx9oW6kblxVspXl8/view?usp=sharing

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
          href={resumelink}
          name="Resume"
          target="_blank"
          rel="noopener noreferrer"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
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
