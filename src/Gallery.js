import React, { useEffect, useState } from "react";
import { Grid, Image, Divider, Message, Loader } from "semantic-ui-react";

export function Gallery() {
  const [pics, setPics] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://sidv-website-api.azurewebsites.net/api/gallery")
      .then((response) => response.json())
      .then((json) => {
        setPics(json);
        setIsLoaded(true);
      })
      .catch((error) => console.log("error with fetch", error));
  }, []);

  const galleryItems = pics.map((pic, i) => {
    return (
      <Grid.Column key={i}>
        <Image className="attached" centered rounded src={pic.link} size="large" />
        <Message attached="bottom" compact color="purple">
          {pic.description}
        </Message>
      </Grid.Column>
    );
  });
  return (
    <div className="padded-grid">
      <Loader active={!isLoaded} content="Loading" />
      <Grid columns={2} stackable>
        {galleryItems}
      </Grid>
      <Divider />
    </div>
  );
}
