import React from "react";
import { Item, Icon, Grid, List, Embed, Modal, Header, Divider } from "semantic-ui-react";

import twister from "./assets/twister.png";
import tracer from "./assets/tracer.jpg";
import autoknoby from "./assets/autoknoby.PNG";
import go_out from "./assets/go_out.PNG";

export default class Projects extends React.Component {
  render() {
    return (
      //name, event, project description, youtube link, github repo
      <div className="padded-grid">
        <Item.Group divided relaxed>
          <Item>
            <Item.Image src={twister} size="large" />
            <Item.Content>
              <Item.Header>Twister - A spin on Twitter</Item.Header>
              <Divider />
              <Header size="small">Twitter + Reddit + Spin = Twister</Header>
              <Item.Meta>Semester long software engineering project</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Part of CS 307 - Software Engineering course. A semester long scrum focused team project. We
                        were given some guidelines to follow and a base product to build - a twitter clone.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Responsible for the front end and integration of the project. Used React Bootstrap JS with CSS.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Check out the deployed project with the link below! (Will take a bit to load)
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid columns={4} container>
                  <Grid.Row>
                    <Grid.Column>
                      <a href="http://twisttier.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <Icon name="chess" size="big" />
                      </a>
                      <p>Link</p>
                    </Grid.Column>
                    <Grid.Column>
                      <a href="https://dev.azure.com/sidv/CS307/_git/CS307" target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="big" />
                      </a>
                      <p>Github Repo</p>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        href="https://purdue0-my.sharepoint.com/:w:/g/personal/fallon2_purdue_edu/Ef8pPpCgvgdHtUEkNpjTthoBoC4DdwrRmAsgIFiRxx1_Zg?e=WZVWvd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="book" size="big" />
                      </a>
                      <p>Project Description</p>
                    </Grid.Column>

                    <Grid.Column>
                      <Modal
                        trigger={
                          <a>
                            <Icon name="youtube play" size="big" />
                          </a>
                        }
                      >
                        <Modal.Header>Twister</Modal.Header>
                        <Modal.Content>
                          <Embed source="youtube" />
                        </Modal.Content>
                      </Modal>
                      <p>Play Video</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src={tracer} size="large" />

            <Item.Content>
              <Item.Header>T-Racer - Self driving car</Item.Header>
              <Divider />
              <Header size="small">Autonomously driving RC car</Header>
              <Item.Meta>Microsoft Hackathon 2019</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Partnered with T-Mobile as part of a customer hack to build a self-driving car with a race
                        track.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Responsible for the software side and testing the collisions and tuning hyperparameters.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Check out the car self-driving in action below!</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid columns={2} container>
                  <Grid.Row>
                    <Grid.Column>
                      <a href="https://github.com/tmobile" target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="big" />
                      </a>
                      <p>Github Repo</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Modal
                        trigger={
                          <a>
                            <Icon name="youtube play" size="big" />
                          </a>
                        }
                      >
                        <Modal.Header>T-Mobile T-Racer</Modal.Header>
                        <Modal.Content>
                          <Embed id="3zPRW5XPsHU" source="youtube" />
                        </Modal.Content>
                      </Modal>
                      <p>Play Video</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src={autoknoby} size="medium" />
            <Item.Content>
              <Item.Header>Autoknoby</Item.Header>
              <Divider />
              <Header size="small">Biometric security for physical controls</Header>
              <Item.Meta>Qualcomm Hackmobile 2018</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Many lives are lost each year to fire accidents at homes caused by children. We decided to come
                        up with a unique biometric solution that allows only authorized users to use hazardous kitchen
                        equipment.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Responsible for the hardware and software integration with the Arduino and the servo motor.
                        Built a working prototype using a Rice Krispies box and jammed all the hardware inside!
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Worked with my fellow intern friends!</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Check out our cool working demo and concept video below!</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid columns={4} container>
                  <Grid.Row>
                    <Grid.Column>
                      <a href="https://github.com/baranusluel/autoknoby" target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="big" />
                      </a>
                      <p>Github Repo</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Modal
                        trigger={
                          <a>
                            <Icon name="youtube play" size="big" />
                          </a>
                        }
                      >
                        <Modal.Header>Autoknoby Biometric Security</Modal.Header>
                        <Modal.Content>
                          <Embed id="xL6oJc1dAVI" source="youtube" />
                        </Modal.Content>
                      </Modal>
                      <p>Play Video</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Modal
                        trigger={
                          <a>
                            <Icon name="youtube play" size="big" />
                          </a>
                        }
                      >
                        <Modal.Header>Our vision for biometric security</Modal.Header>
                        <Modal.Content>
                          <Embed id="KcPRkwxiy4U" source="youtube" />
                        </Modal.Content>
                      </Modal>
                      <p>Play Concept Video</p>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        href="https://github.com/baranusluel/autoknoby/blob/master/autoknoby.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="book" size="big" />
                      </a>
                      <p>Project Description</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src={go_out} size="large" />
            <Item.Content>
              <Item.Header>Go Out!</Item.Header>
              <Divider />
              <Header size="small">An Event viewing and management website</Header>
              <Item.Meta>Personal team project</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Part of CS 252 - Systems Programming course. Was given creative freedom to work on anything.
                        Used this opportunity to get familiar with client-server architecture with Python Flask/HTML/JS
                        for an event viewing and management app that can be used in a college campus.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Responsible for both server side and client side code and integration testing.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Check out the deployed project with the link below! (Will take a bit to load)
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid columns={4} container>
                  <Grid.Row>
                    <Grid.Column>
                      <a href="http://purduego-out.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <Icon name="chess" size="big" />
                      </a>
                      <p>Link</p>
                    </Grid.Column>
                    <Grid.Column>
                      <a href="https://github.com/TarcanGul/GoOut" target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="big" />
                      </a>
                      <p>Github Repo</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Modal
                        trigger={
                          <a>
                            <Icon name="youtube play" size="big" />
                          </a>
                        }
                      >
                        <Modal.Header>Go Out!</Modal.Header>
                        <Modal.Content>
                          <Embed id="xDaw2UBmsLE" source="youtube" />
                        </Modal.Content>
                      </Modal>
                      <p>Play Video</p>
                    </Grid.Column>
                    <Grid.Column>
                      <a
                        href="https://drive.google.com/open?id=1DNk1ISoPzshbW1uUACPwovDJe5nnybeSD9z1JiST27w"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="book" size="big" />
                      </a>
                      <p>Project Description</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Divider />
      </div>
    );
  }
}
