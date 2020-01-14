import React from "react";
import { Grid, Image, Divider } from "semantic-ui-react";

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

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="padded-grid">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Image src={pic2} size="large" />
              <p>Mt Rainier - Seattle, Summer 2019</p>
            </Grid.Column>
            <Grid.Column>
              <Image src={pic8} size="large" />
              <p>Taiyaki Ice Cream - NYC Thanksgiving 2019</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image src={pic6} size="large" />
              <p>Benny Tudino's - NYC Thanksgiving 2019</p>
            </Grid.Column>

            <Grid.Column>
              <Image src={pic5} size="large" />
              <p>Mt. Rainier Sunrise Hike - Seattle, Summer 2019</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image src={pic1} size="large" />
              <p>Microsoft Hackathon with Satya Nadella - Seattle, Summer 2019</p>
            </Grid.Column>
            <Grid.Column>
              <Image src={pic9} size="large" />
              <p>Beach boys - San Diego, Summer 2018</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image src={pic7} size="large" />
              <p>No caption required - NYC Thanksgiving 2019</p>
            </Grid.Column>

            <Grid.Column>
              <Image src={pic10} size="large" />
              <p>Times Square - NYC Thanksgiving 2019</p>
              <Divider hidden />
              <Image src={pic3} size="large" />
              <p>Red Mt. Rainier - Seattle, Summer 2019</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image src={pic11} size="large" />
              <p>Eyes open - NYC Thanksgiving 2019</p>
            </Grid.Column>
            <Grid.Column>
              <Image src={pic4} size="large" />
              <p>4th of July - Seattle, Summer 2019</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
      </div>
    );
  }
}
