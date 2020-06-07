import React from "react";
import { Grid, Image, Divider, Message } from "semantic-ui-react";

import pic1 from "./assets/about/pic1.JPG";
import pic2 from "./assets/about/pic2.JPG";
import pic3 from "./assets/about/pic3.jpeg";
import pic4 from "./assets/about/pic4.jpeg";
import pic5 from "./assets/about/pic5.jpg";
import pic6 from "./assets/about/pic6.jpeg";
import pic7 from "./assets/about/pic7.PNG";
import pic8 from "./assets/about/pic8.jpeg";
import pic9 from "./assets/about/pic9.jpg";
import pic10 from "./assets/about/pic10.jpg";
import pic11 from "./assets/about/pic11.jpg";
import pic16 from "./assets/about/pic16.jpg";
import pic17 from "./assets/about/pic17.jpg";
import pic18 from "./assets/about/pic18.jpg";
import pic19 from "./assets/about/pic19.jpg";

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="padded-grid">
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic18} size="large" />
              <Message attached="bottom" compact>
                Miami Wynwood Marketplace 2020
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Image className="attached" centered src={pic17} size="large" />
              <Message attached="bottom" compact>
                Miami Beach 2020
              </Message>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic19} size="large" />
              <Message attached="bottom" compact>
                Miami Wynwood Marketplace 2020
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Image className="attached" centered src={pic16} size="large" />
              <Message attached="bottom" compact>
                Columbian Park, Lafayette 2020
              </Message>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic2} size="large" />
              <Message attached="bottom" compact>
                Mt. Rainer - Seattle Summer 2019
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Image className="attached" centered src={pic8} size="large" />
              <Message attached="bottom" compact>
                Taiyaki Ice Cream - NYC Thanksgiving 2019
              </Message>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic6} size="large" />
              <Message attached="bottom" compact>
                Benny Tudino's - NYC Thanksgiving 2019
              </Message>
            </Grid.Column>

            <Grid.Column>
              <Image className="attached" centered rounded src={pic5} size="large" />
              <Message attached="bottom" compact>
                Mt. Rainier Sunrise Hike - Seattle, Summer 2019
              </Message>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic1} size="large" />
              <Message attached="bottom" compact>
                Microsoft Hackathon with Satya Nadella - Seattle, Summer 2019
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic9} size="large" />
              <Message attached="bottom" compact>
                Beach boys - San Diego, Summer 2018
              </Message>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic7} size="large" />
              <Message attached="bottom" compact>
                No caption required - NYC Thanksgiving 2019
              </Message>
            </Grid.Column>

            <Grid.Column>
              <Image className="attached" centered rounded src={pic10} size="large" />
              <Message attached="bottom" compact>
                Times Square - NYC Thanksgiving 2019
              </Message>
              <Divider hidden />
              <Image className="attached" centered rounded src={pic3} size="large" />
              <Message attached="bottom" compact>
                Red Mt. Rainier - Seattle, Summer 2019
              </Message>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic11} size="large" />
              <Message attached="bottom" compact>
                Eyes open - NYC Thanksgiving 2019
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Image className="attached" centered rounded src={pic4} size="large" />
              <Message attached="bottom" compact>
                4th of July - Seattle, Summer 2019
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
      </div>
    );
  }
}
