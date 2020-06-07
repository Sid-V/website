import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import resumeDownload from "./assets/Resume_Sidharth_Spring2020.pdf";
//https://drive.google.com/open?id=1qxgsbqucXccKLcHIOhPdimjkNTSEUAku

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="huge" stackable fluid comapct>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
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
          href={resumeDownload}
          name="Resume"
          target="_blank"
          rel="noopener noreferrer"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
          download
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
        <Menu.Item
          as={Link}
          to="/teaching"
          name="Teaching"
          active={activeItem === "Teaching"}
          onClick={this.handleItemClick}
        >
          Teaching
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/courses"
          name="Courses"
          active={activeItem === "Courses"}
          onClick={this.handleItemClick}
        >
          Courses
        </Menu.Item>
      </Menu>
    );
  }
}
