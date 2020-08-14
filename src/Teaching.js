import React, {useState, useEffect} from "react";
import { Item, Icon, List } from "semantic-ui-react";
import "./App.css";

import logo_purdue from "./assets/logo_purdue.png";
import logo_codecafe from "./assets/logo_codecafe.jpg";
import logo_helloworld from "./assets/logo_helloworld.png";

const logoArray = [logo_purdue, logo_purdue, logo_codecafe, logo_helloworld]

export function Teaching() {
  
  const [teaching, setTeaching] = useState([]);

  useEffect(() => {    
    fetch("https://sidv-website-api.azurewebsites.net/api/teaching")
      .then(response => response.json())
      .then(json => setTeaching(json))
      .catch(error => console.log('error with fetch', error));
    }, []);


  const teachingItems = teaching.map((teach, i) => {
    return (
      <Item key={i}>
        <Item.Image size="medium" src={logoArray[i]} />
        <Item.Content>
          <Item.Header>{teach.header}</Item.Header>
          <Item.Meta>{teach.headermeta}</Item.Meta>
          <Item.Description className="left-align">
            <List>
              {
                teach.descriptions.map((desc, i) => {
                  return (
                    <List.Item key={i}>
                      <Icon name="gg circle" />
                      <List.Content>
                        <List.Description>{desc}</List.Description>
                      </List.Content>
                    </List.Item>
                  )
                })
              }
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  })

  return (
    <div className="padded-grid">
      <Item.Group divided relaxed >
        {teachingItems}
      </Item.Group>
    </div>
  );
}