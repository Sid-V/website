import React, { useState, useEffect } from "react";
import { Item, Icon, Grid, Divider, List } from "semantic-ui-react";
import "./App.css";

export function Experience() {

  const [experience, setExperience] = useState([]);
  
  useEffect(() => {    
    fetch("https://sidv-website-api.azurewebsites.net/api/experience")
      .then(response => response.json())
      //.then(res => console.log(res))
      .then(json => setExperience(json))
      .catch(error => console.log('error with fetch', error));
    }, []);

    const ExpItems = experience.map((exp, i) => {
      return(
        <Item key={i}>
          <Item.Image size="medium" src={exp.image} />
          <Item.Content>
           <Item.Header>{exp.header}</Item.Header>
            <Item.Meta>{exp.headermeta}</Item.Meta>
            <Item.Description className="left-align">
              <List>
              {
                exp.descriptions.map((desc, i) => {
                  return (
                    <List.Item key={i}>
                      <Icon name="gg circle"/>
                      <List.Content>
                      <List.Description>{desc}</List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })
              }
              </List>
            </Item.Description>
            <Item.Extra>
            <Grid container doubling columns={5} verticalAlign="middle" textAlign="center">
              <Grid.Row>
                {
                  exp.icons.map((icon, i) => {
                    return (
                      <Grid.Column key={i}>
                        <Icon name={icon.name} size="big" />
                        <p>{icon.description}</p>
                      </Grid.Column>
                    );
                  })
                }
              </Grid.Row>
            </Grid>
          </Item.Extra>
          </Item.Content>
        </Item>
      );
    });

  return (
    <div className="padded-grid">
      <Item.Group divided relaxed>
        {ExpItems}
      </Item.Group>
      <Divider/>
    </div>
  );
}