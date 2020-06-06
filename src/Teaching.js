import React from "react";
import { Item, Icon, List } from "semantic-ui-react";
import "./App.css";

import logo_purdue from "./assets/logo_purdue.png";
import logo_codecafe from "./assets/logo_codecafe.jpg";
import logo_helloworld from "./assets/logo_helloworld.png";

export default class App extends React.Component {
  render() {
    return (
      <div className="padded-grid">
        <Item.Group divided relaxed>
          <Item>
            <Item.Image size="medium" src={logo_purdue} />
            <Item.Content>
              <Item.Header>CS 250 - Computer Architecture</Item.Header>
              <Item.Meta>Purdue University</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Undergraduate Teaching assistant</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Helped run the labs and answer any questions regarding the material that the
                        students have
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Led multiple weekly office hours for students
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_purdue} />
            <Item.Content>
              <Item.Header>CS 240 - C Programming</Item.Header>
              <Item.Meta>Purdue University</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Undergraduate Teaching assistant</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Helped run the labs and answer any questions regarding the material that the
                        students have
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_codecafe} />
            <Item.Content>
              <Item.Header>Code Cafe Mentor</Item.Header>
              <Item.Meta>IEEE at Purdue University</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Mentored 2018, 2019 editions</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Taught Python basic to intermediate level to students who have never coded
                        before
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_helloworld} />
            <Item.Content>
              <Item.Header>Hello World Mentor</Item.Header>
              <Item.Meta>Computer Science Purdue University</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Hello world is a freshman only hackathon for all students at Purdue
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Mentored 2018, 2019 editions</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Answered any questions the students had on any topic that they were working
                        on
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}
