import React from "react";
import { Form, Message, Divider, Container } from "semantic-ui-react";
import "./App.css";

const options = [
  { key: '0', text: '0', value: '0' },
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: '8', text: '8', value: '8' },
  { key: '9', text: '9', value: '9' },
  { key: '10', text: '10', value: '10' }
]

export default class SpotifyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danceability: "0",
      energy: "0",
      speechiness: "0",
      acousticness: "0",
      instrumentalness: "0",
      tempo: "0",
      formSubmitted: this.props.formSubmitted,
      embedString: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e, { name, value }) => {
    console.log(name, value);
    this.setState({ [name] : value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    let self = this;
    
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    
    var formdata = new FormData();
    formdata.append("danceability", parseFloat(this.state.danceability)/10.0);
    formdata.append("energy", parseFloat(this.state.energy)/10.0);
    formdata.append("speechiness", parseFloat(this.state.speechiness)/10.0);
    formdata.append("acousticness", parseFloat(this.state.acousticness)/10.0);
    formdata.append("instrumentalness", parseFloat(this.state.instrumentalness)/10.0);
    formdata.append("tempo", parseFloat(this.state.tempo)/10.0);

    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch("https://sidv.pythonanywhere.com/spotifyRecommendations/", requestOptions)
      .then(response => response.text())

      .then(result => {
        console.log(result);
        self.setState({embedString: result});
      })
      .then(function(res)
      {
        self.setState({formSubmitted: true})
        self.props.handleCallback(self.state.formSubmitted, self.state.embedString);
        //self.resetForm();
      })
      .catch(error => console.log('error', error));
  };

  resetForm() {
    this.setState({ danceability: "0", energy: "0", speechiness: "0", acousticness: "0",  instrumentalness: "0", tempo: "0"});
  }

  render() {
    const { danceability, energy, speechiness, acousticness, instrumentalness, tempo } = this.state;
    return (
      <div className="form">
        <Container>
        <Form onSubmit={this.handleSubmit} success={this.state.formSubmitted} target="_blank">
          <Form.Field>
            <Form.Select value={danceability} name="danceability" options={options} label='Danceability' fluid onChange={this.handleChange}/> 
          </Form.Field>     
          <Form.Field>
            <Form.Select value={energy} name="energy"  options={options} label='Energy' fluid onChange={this.handleChange}/> 
          </Form.Field>
          <Form.Field>
            <Form.Select value={speechiness} name="speechiness" options={options} label='Vocalness' fluid onChange={this.handleChange}/> 
          </Form.Field> 
          <Form.Field>
            <Form.Select value={acousticness} name="acousticness" options={options} label='Acousticness' fluid onChange={this.handleChange}/> 
          </Form.Field> 
          <Form.Field>
            <Form.Select value={instrumentalness} name="instrumentalness" options={options} label='Instrumentalness' fluid onChange={this.handleChange}/> 
          </Form.Field> 
          <Form.Field>
            <Form.Select value={tempo} name="tempo" options={options} label='Tempo' fluid onChange={this.handleChange}/> 
          </Form.Field>      
        
          <Divider hidden />
          <Message
            success
            header="Hold on!"
          />
          <Form.Button content="Submit"/>
        </Form>
        </Container>
      </div>
    );
  }
}