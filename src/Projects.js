import React, { useEffect, useState } from "react";
import { Item, Icon, Grid, List, Embed, Modal, Header, Divider, Loader } from "semantic-ui-react";
import "./App.css";

export function Projects() {
  const [project, setProject] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://sidv-website-api.azurewebsites.net/api/projects")
      .then((response) => response.json())
      //.then(res => console.log(res))
      .then((json) => {
        setProject(json);
        setIsLoaded(true);
      })
      .catch((error) => console.log("error with fetch", error));
  }, []);

  const projectItems = project.map((proj, i) => {
    return (
      <Item key={i}>
        <Item.Image size="large" src={proj.image} />
        <Item.Content>
          <Item.Header>{proj.header}</Item.Header>
          <Divider />
          <Header size="small">{proj.miniheader}</Header>
          <Item.Meta>{proj.headermeta}</Item.Meta>
          <Item.Description className="left-align">
            <List>
              {proj.descriptions.map((desc, i) => {
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
          <Item.Extra>
            <Grid columns={4} container doubling textAlign="center">
              <Grid.Row>
                {proj.icons.map((icon, i) => {
                  if (icon.isModal === true) {
                    return (
                      <Grid.Column key={i}>
                        <Modal
                          trigger={
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2185d0' }}>
                              <Icon link name="youtube play" size="big" />
                            </button>
                          }
                        >
                          <Modal.Header>{proj.header}</Modal.Header>
                          <Modal.Content>
                            <Embed id={icon.link} source="youtube" />
                          </Modal.Content>
                        </Modal>
                        <p>{icon.description}</p>
                      </Grid.Column>
                    );
                  } else {
                    return (
                      <Grid.Column key={i}>
                        <a href={icon.link} target="_blank" rel="noopener noreferrer">
                          <Icon name={icon.name} size="big" />
                        </a>
                        <p>{icon.description}</p>
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
            </Grid>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  });

  return (
    <div className="padded-grid responsive-container">
      <Loader active={!isLoaded} content="Loading" />
      <Item.Group divided relaxed>
        {projectItems}
      </Item.Group>
      <Divider />
      <Divider hidden />
    </div>
  );
}
