import React, { useState, useEffect } from "react";
import { Item, Icon, List, Loader } from "semantic-ui-react";
import "./App.css";

export function Teaching() {
  const [teaching, setTeaching] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://sidv-website-api.azurewebsites.net/api/teaching")
      .then((response) => response.json())
      .then((json) => {
        setTeaching(json);
        setIsLoaded(true);
      })
      .catch((error) => console.log("error with fetch", error));
  }, []);

  const teachingItems = teaching.map((teach, i) => {
    return (
      <Item key={i}>
        <Item.Image size="medium" src={teach.image} />
        <Item.Content>
          <Item.Header>{teach.header}</Item.Header>
          <Item.Meta>{teach.headermeta}</Item.Meta>
          <Item.Description className="left-align">
            <List>
              {teach.descriptions.map((desc, i) => {
                return (
                  <List.Item key={i}>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>{desc}</List.Description>
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  });

  return (
    <div className="padded-grid">
      <Loader active={!isLoaded} content="Loading" />
      <Item.Group divided relaxed>
        {teachingItems}
      </Item.Group>
    </div>
  );
}
