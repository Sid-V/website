import React, { useRef, useState } from "react";
import { Form, Header, Message, TextArea, Divider, Container, Button } from "semantic-ui-react";
import "./App.css";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_26b9n6c', 'template_h3kcibc', form.current, {
        publicKey: 'aKxlUmdA1FUtvEx3v',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormStatus({ success: true, error: false });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error);
          setFormStatus({ success: false, error: true });
        },
      );
  };

  return (
    <div className="form-style">
      <Container>
        <Header as="h3">Contact Form</Header>        
        <form ref={form} onSubmit={sendEmail} className="ui form">
          <Form.Field>
            <label>Name</label>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Name"
              required 
            />
          </Form.Field>
          
          <Form.Field>
            <label>Email</label>
            <input 
              type="email" 
              name="user_email" 
              placeholder="Email"
              required 
            />
          </Form.Field>
          
          <Form.Field>
            <label>Message</label>
            <TextArea 
              name="message" 
              placeholder="Your message"
              required 
            />
          </Form.Field>
          <Button type="submit" primary>Send</Button>
        </form>
        <Divider hidden />
          {formStatus.success && (
            <Message
              success
              header="Message sent!"
              content="I will get back to you as soon as possible! :)"
            />
          )}
          {formStatus.error && (
            <Message
              error
              header="Message failed!"
              content="Please check your values and try again!"
            />
          )}
      </Container>
    </div>
  );
};

export default ContactForm;
