import React from "react";
import { Form, Message, Divider, Container, Label, Loader } from "semantic-ui-react";
import "./App.css";
import { Slider } from "@material-ui/core";

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


  handleSubmit = (event) => {
    event.preventDefault();
    let self = this;
    this.setState({isLoaded: false})
    
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    
    var formdata = new FormData();
    formdata.append("danceability", this.state.danceability/10.0);
    formdata.append("energy", this.state.energy/10.0);
    formdata.append("speechiness", this.state.speechiness/10.0);
    formdata.append("acousticness", this.state.acousticness/10.0);
    formdata.append("instrumentalness", this.state.instrumentalness/10.0);
    formdata.append("tempo", this.state.tempo/10.0);

    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    //sidv1799.pythonanywhere.com
    
    fetch("https://sidv1799.pythonanywhere.com/spotifyRecommendations/", requestOptions)
      .then(response => response.text())
      .then(result => {
        //console.log(result);
        self.setState({embedString: result});
      })
      .then(function(res)
      {
        self.setState({formSubmitted: true, isLoaded: true})
        self.props.handleCallback(self.state.formSubmitted, self.state.embedString);
        self.resetForm();
      })
      .catch(error => console.log('error', error));
  };

  resetForm() {
    this.setState({ danceability: 7, energy: 8, speechiness: 2, acousticness: 3,  instrumentalness: 1, tempo: 5});
  }



  render() {
    return (
      <div className="form">
        <Loader active={!this.state.isLoaded} content="Loading" />
        <Container>
        <Form onSubmit={this.handleSubmit} success={this.state.formSubmitted} target="_blank">
          <Form.Field>
            <Label content="Danceability" size="large"/>
            <Slider defaultValue={7} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="danceability" onChangeCommitted={this.handleSliderChange("danceability")} />
          </Form.Field>
          <Form.Field>
            <Label content="Energy" size="large"/>
            <Slider defaultValue={8} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="energy" onChangeCommitted={this.handleSliderChange("energy")} />
          </Form.Field> 
          <Form.Field>
            <Label content="speechiness" size="large"/>
            <Slider defaultValue={2} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="speechiness" onChangeCommitted={this.handleSliderChange("speechiness")} />
          </Form.Field> 
          <Form.Field>
            <Label content="acousticness" size="large"/>
            <Slider defaultValue={3} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="acousticness" onChangeCommitted={this.handleSliderChange("acousticness")} />
          </Form.Field> 
          <Form.Field>
            <Label content="instrumentalness" size="large"/>
            <Slider defaultValue={1} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="instrumentalness" onChangeCommitted={this.handleSliderChange("instrumentalness")} />
          </Form.Field> 
          <Form.Field>
            <Label content="tempo" size="large"/>
            <Slider defaultValue={5} valueLabelDisplay="auto" step={0.5} marks={true} min={0} max={10}  name="tempo" onChangeCommitted={this.handleSliderChange("tempo")} />
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