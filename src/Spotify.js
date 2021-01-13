import React, { useState } from "react";
import { Card, Grid, Container, Divider, Modal, Button, Icon } from "semantic-ui-react";
import "./App.css";
import SpotifyForm from "./SpotifyForm";

export function Spotify() {
  const [spotify, setSpotify] = useState([]);
  const [openModal, setOpenModal] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const songCards = spotify.map((item, i) => {
    return (
      <Card centered key={i} fluid>
        <iframe title={i} src={item} height="380" width="300" marginWidth="30" frameborder="0" allowtransparency="true" allow="encrypted-media" />
      </Card>
    );
  });

  const flagshipPlaylist = () =>
  {
    return (
    <>
    <h3>My Flagship Playlist</h3>
    <h5>Check out my other playlists in my spotify profile by clicking below</h5>
    <Card centered fluid>
      <iframe title="flagshipPlaylist" src="https://open.spotify.com/embed/playlist/723DFjIwZzBqoIHezixZ0j" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media" />
    </Card>
    <Divider hidden/>
    </>
    );
  }

  function callbackHandler(value, embedString)
  {
    setFormSubmitted(value);
    setSpotify(embedString.split(','));
  }

  return (
    <div className="padded-grid font-medium">
      <Modal basic onClose={()=> setOpenModal(false)}
      open={openModal} size='small' closeIcon>
        <Modal.Content>
          <p>
            <h3>I listen to a lot of music and wanted to create a fun way to share it with you all </h3>
            <h3>So, I created a Spotify Song Recommender Engine that takes in a bunch of parameters and picks 9 songs from my library that are most similar to what you want to listen to</h3>
            <h3>Each of these parameters are normalized and take a value from 0 to 10</h3>
            <ul>
              <li>Danceability - How suitable a track is for dancing</li>
              <li>Energy - Measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.</li>
              <li>Vocalness - Presence of words in a song</li>
              <li>Acousticness - Acoustic or not lol</li>
              <li>Instrumentalness - Presence or absence of vocals</li>
              <li>Tempo - Estimated tempo in terms of Beats per min (BPM)</li>
            </ul>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted onClick={() => setOpenModal(false)}>
            <Icon name='checkmark' /> Ok! Got it!
          </Button>
        </Modal.Actions>
      </Modal>

      { !formSubmitted && (<SpotifyForm formSubmitted={formSubmitted} handleCallback={callbackHandler}/>)
      }
      
      <Container>
        <Grid columns={3} stackable doubling relaxed>
          <Grid.Row centered>
            { formSubmitted && <h3>Recommendations</h3>}
            <Card.Group stackable doubling itemsPerRow={3}>{formSubmitted && songCards}</Card.Group>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column stretched>
              {formSubmitted && flagshipPlaylist()}
            </Grid.Column>
          </Grid.Row>          
        </Grid>
      </Container>
    </div>
  );
}