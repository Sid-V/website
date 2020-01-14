import React from "react";
import { Item, Icon, Grid, Divider, List } from "semantic-ui-react";
import "./App.css";

import logo_microsoft from "./assets/logo_microsoft.jpg";
import logo_qualcomm from "./assets/logo_qualcomm.jpg";
import logo_planys from "./assets/logo_planys.png";
import logo_spi from "./assets/logo_spi.jpg";
import logo_epics from "./assets/logo_epics.png";
import logo_infosys from "./assets/logo_infosys.png";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="padded-grid">
        <Item.Group divided relaxed>
          <Item>
            <Item.Image size="medium" src={logo_microsoft} />

            <Item.Content>
              <Item.Header>Microsoft</Item.Header>
              <Item.Meta>Core Services Engineering and Operations</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        ML Platform Team – A complete E2E automated solution to provision Azure resources, Repositories,
                        Area Paths, Notebooks and more to bring down the setup time from few weeks to under a day to be
                        8 used in a ML or Analytics Project
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Designed and built a frontend UI using Office UI Fabric React and TypeScript
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Researched and Implemented user experience techniques, compliance and accessibility standards
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        <a href="/projects">Partnered with T-Mobile in the Microsoft Hackathon</a> to autonomously drive
                        a car using image recognition and supervised learning
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid container columns={5}>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon name="code" size="big" />
                      <p>Software Development</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="code branch" size="big" />
                      <p>Agile</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="react" size="big" />
                      <p>React</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="js" size="big" />
                      <p>JS</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="universal access" size="big" />
                      <p>Accessibility</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_qualcomm} />

            <Item.Content>
              <Item.Header>Qualcomm</Item.Header>
              <Item.Meta>Camera Test Development Team</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Localized the camera testing process by eliminating the connection between the PC and the camera
                        test device, thus improving test times and ability to add more complex and randomizable test
                        suites
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Built an end-to-end tool that translates multiple testcase XMLs into complex feature tests
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Researched and Implemented different data mining techniques and NLP to analyze log files
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        <a href="/projects">Won overall 2nd and ‘Best Innovative Hack’ at Qualcomm’s Hackmobile</a> for
                        building a biometric security system for physical controls using a Dragonboard 410c, facial
                        recognition AI and a physical knob
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid container columns={4}>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon name="code" size="big" />
                      <p>Software Development</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="code branch" size="big" />
                      <p>Agile</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="code" size="big" />
                      <p>C/C++</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="cog" size="big" />
                      <p>Test methologies</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_epics} />

            <Item.Content>
              <Item.Header>Purdue Engineering Projects in Community Service (EPICS)</Item.Header>
              <Item.Meta>Greater Lafayette Area Special Services (GLASS) Team</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        TOSS is a motorized ball-launching system to allow children with disabilities such as cerebral
                        palsy to participate in physical activities that require throwing or kicking a large ball, such
                        as kickball
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Researched on Arduino and PWM signals and built a speed control for the spinning motors on TOSS
                        to vary the distance the ball is launched
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid container columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon name="code" size="big" />
                      <p>Software Development</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="computer" size="big" />
                      <p>Hardware Development</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="code" size="big" />
                      <p>Arduino</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_planys} />

            <Item.Content>
              <Item.Header>Planys Technologies</Item.Header>
              <Item.Meta>Software Dev Team</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Analyzed and interpreted the digital signals received by the ultrasonic devices used in
                        thickness measurements of structures using MATLAB
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>Researched different methods of Non-Destructive Testing (NDT)</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Integrated the ultrasound module into their prototype Remotely Operated Underwater Vehicle (ROV)
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid container columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon name="code" size="big" />
                      <p>Software Development</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="code" size="big" />
                      <p>C/C++</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="computer" size="big" />
                      <p>MATLAB</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_spi} />

            <Item.Content>
              <Item.Header>SPI Cinemas</Item.Header>
              <Item.Meta>Learning and Development Team</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Part of the ‘Makerspace’ Project Team– Communicated and identified manufacturers and sellers
                        regarding high-end machines like CNC Routers and planers, 3D Printers and Laser cutters
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid container columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon name="book" size="big" />
                      <p>Research</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="code branch" size="big" />
                      <p>Team Oriented</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="medium" src={logo_infosys} />

            <Item.Content>
              <Item.Header>Infosys Ltd.</Item.Header>
              <Item.Meta>Catch Them Young Program</Item.Meta>
              <Item.Description className="left-align">
                <List>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Part of an elite 30 that got selected for a 2-week rigorous bootcamp at Infosys HQ in Chennai,
                        India
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="gg circle" />
                    <List.Content>
                      <List.Description>
                        Exposed to concepts such as computer security, networking, graphics, animation and much more
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
              <Item.Extra>
                <Grid container columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon name="fire" size="big" />
                      <p>Bootcamp</p>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon name="file word" size="big" />
                      <p>Microsoft Office</p>
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
