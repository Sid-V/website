import React from "react";
import { Form, Header, Message, TextArea, Divider } from "semantic-ui-react";
import "./App.css";
import emailjs from "emailjs-com";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    let self = this;

    if (!this.state.email.includes("@")) {
      this.setState({ error: true, mailSent: false });
      return;
    }

    var template_params = {
      reply_to: this.state.email,
      from_name: this.state.name,
      to_name: "Sidharth",
      message_html: this.state.message,
      from_email: this.state.email
    };
    var service_id = "default_service";
    var template_id = "template_TgUIawZM";
    var user_id = "user_cckrUVfxINzCY2vzgiljc";

    emailjs
      .send(service_id, template_id, template_params, user_id)
      .then(function(response) {
        self.setState({ mailSent: true, error: false });
        self.resetForm();
      })
      .catch(function(error) {
        self.setState({ error: true, mailSent: false });
      });
  };

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="form">
        <Header as="h3">Contact Form</Header>
        <Form onSubmit={this.handleSubmit} success={this.state.mailSent} error={this.state.error}>
          <Form.Input placeholder="Name" name="name" value={name} onChange={this.handleChange} required />
          <Form.Input placeholder="Email" name="email" value={email} onChange={this.handleChange} required />
          <TextArea placeholder="Your message" name="message" value={message} onChange={this.handleChange} required />
          <Divider hidden />
          <Message success header="Message sent!" content="Sidharth will get back to you as soon as possible!" />
          <Message error header="Message failed!" content="Please check your values and try again!" />
          <Form.Button content="Submit" />
        </Form>
      </div>
    );
  }
}
