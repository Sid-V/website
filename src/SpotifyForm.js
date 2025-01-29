import React from "react";
import { Form, Message, Divider, Container, Label, Loader } from "semantic-ui-react";
import "./App.css";
import { Slider } from '@mui/material';

export default class SpotifyForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      danceability: 0,
      energy: 0,
      speechiness: 0,
      acousticness: 0,
      instrumentalness: 0,
      tempo: 0,
      formSubmitted: this.props.formSubmitted,
      embedString: "",
      isLoaded: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);

  }


  handleSliderChange =  slidername  => (e, value) => {
    this.setState({ [slidername] : value})
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({isLoaded: false});
    
    try {
      const formdata = new FormData();
      const parameters = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'tempo'];
      
      parameters.forEach(param => {
        formdata.append(param, this.state[param]/10.0);
      });
      
      const requestOptions = {
        method: 'POST',
        body: formdata,
        // Adding timeout and better headers
        timeout: 30000, // 30 second timeout
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };

      // Using async/await for cleaner code
      const response = await fetch("https://sidv-spotify.azurewebsites.net/spotifyRecommendations/", requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.text();
      
      this.setState({
        embedString: result,
        formSubmitted: true,
        isLoaded: true
      }, () => {
        this.props.handleCallback(true, result);
        this.resetForm();
      });

    } catch (error) {
      console.error('Error:', error);
      this.setState({
        isLoaded: true,
        error: 'Failed to fetch recommendations. Please try again.'
      });
    }
  };
  
  resetForm() {
    this.setState({ 
      danceability: Math.floor(Math.random() * 11),
      energy: Math.floor(Math.random() * 11), 
      speechiness: Math.floor(Math.random() * 11),
      acousticness: Math.floor(Math.random() * 11),
      instrumentalness: Math.floor(Math.random() * 11),
      tempo: Math.floor(Math.random() * 11)
    });
  }



  render() {
    return (
      <div className="form-style responsive-container">
        <Container>
          <Loader active={!this.state.isLoaded} content="Finding your perfect songs..." />
          {this.state.error && (
            <Message negative>
              <Message.Header>Error</Message.Header>
              <p>{this.state.error}</p>
            </Message>
          )}
          <Form 
            onSubmit={this.handleSubmit} 
            success={this.state.formSubmitted} 
            target="_blank"
            className="ui form"
          >
            <Form.Field>
              <Label content="Danceability" size="large"/>
              <Slider 
                defaultValue={Math.floor(Math.random() * 11)} 
                valueLabelDisplay="auto" 
                step={0.5} 
                marks={true} 
                min={0} 
                max={10}  
                name="danceability" 
                onChangeCommitted={this.handleSliderChange("danceability")} 
              />
            </Form.Field>
            <Form.Field>
              <Label content="Energy" size="large"/>
              <Slider defaultValue={Math.floor(Math.random() * 11)} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="energy" onChangeCommitted={this.handleSliderChange("energy")} />
            </Form.Field> 
            <Form.Field>
              <Label content="speechiness" size="large"/>
              <Slider defaultValue={Math.floor(Math.random() * 11)} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="speechiness" onChangeCommitted={this.handleSliderChange("speechiness")} />
            </Form.Field> 
            <Form.Field>
              <Label content="acousticness" size="large"/>
              <Slider defaultValue={Math.floor(Math.random() * 11)} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="acousticness" onChangeCommitted={this.handleSliderChange("acousticness")} />
            </Form.Field> 
            <Form.Field>
              <Label content="instrumentalness" size="large"/>
              <Slider defaultValue={Math.floor(Math.random() * 11)} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="instrumentalness" onChangeCommitted={this.handleSliderChange("instrumentalness")} />
            </Form.Field> 
            <Form.Field>
              <Label content="tempo" size="large"/>
              <Slider defaultValue={Math.floor(Math.random() * 11)} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="tempo" onChangeCommitted={this.handleSliderChange("tempo")} />
            </Form.Field>                                                        
            <Divider hidden /> 
            <Message
              success
              header="Hold on!"
            />
            <Form.Button primary content="Submit"/>
          </Form>
        </Container>
      </div>
    );
  }
}