import React from "react";
import { Grid, Image, Divider, Message } from "semantic-ui-react";

import pic1 from "./assets/about/pic1.JPG";
import pic2 from "./assets/about/pic2.JPG";
import pic3 from "./assets/about/pic3.jpeg";
import pic4 from "./assets/about/pic4.jpeg";
import pic5 from "./assets/about/pic5.jpg";
import pic6 from "./assets/about/pic6.jpeg";
import pic7 from "./assets/about/pic7.png";
import pic8 from "./assets/about/pic8.jpeg";
import pic9 from "./assets/about/pic9.jpg";
import pic10 from "./assets/about/pic10.jpg";
import pic11 from "./assets/about/pic11.jpg";
import pic16 from "./assets/about/pic16.jpg";
import pic17 from "./assets/about/pic17.jpg";
import pic18 from "./assets/about/pic18.jpg";
import pic19 from "./assets/about/pic19.jpg";

const picArray = [pic18, pic17, pic19, pic16, pic2, pic8, pic6, pic5, pic1, pic9, pic7, pic11, pic10, pic3, pic4]
const descArray = [
  "Miami Wynwood Marketplace 2020",
  "Miami Beach 2020",
  "Miami Wynwood Marketplace 2020",
  "Columbian Park, Lafayette 2020",
  "Mt. Rainer - Seattle Summer 2019",
  "Taiyaki Ice Cream - NYC Thanksgiving 2019",
  "Benny Tudino's - NYC Thanksgiving 2019",
  "Mt. Rainier Sunrise Hike - Seattle, Summer 2019",
  "Microsoft Hackathon with Satya Nadella - Seattle, Summer 2019",
  "Beach boys - San Diego, Summer 2018",
  "No caption required - NYC Thanksgiving 2019",
  "Eyes open - NYC Thanksgiving 2019",
  "Times Square - NYC Thanksgiving 2019",
  "Red Mt. Rainier - Seattle, Summer 2019",
  "4th of July - Seattle, Summer 2019"
]
const dictPics = {
  pic18: "Miami Wynwood Marketplace 2020",
  pic17: "Miami Beach 2020",
  pic19: "Miami Wynwood Marketplace 2020",
  pic16: "Columbian Park, Lafayette 2020",
  pic2: "Mt. Rainer - Seattle Summer 2019",
  pic8: "Taiyaki Ice Cream - NYC Thanksgiving 2019",
  pic6: "Benny Tudino's - NYC Thanksgiving 2019",
  pic5: "Mt. Rainier Sunrise Hike - Seattle, Summer 2019",
  pic1: "Microsoft Hackathon with Satya Nadella - Seattle, Summer 2019",
  pic9: "Beach boys - San Diego, Summer 2018",
  pic7: "No caption required - NYC Thanksgiving 2019",
  pic10: "Times Square - NYC Thanksgiving 2019",
  pic3: "Red Mt. Rainier - Seattle, Summer 2019",
  pic11: "Eyes open - NYC Thanksgiving 2019",
  pic4: "4th of July - Seattle, Summer 2019"
}
//console.log(dictPics)

export function Gallery() {
  
  const galleryItems = picArray.map((key, i) => {
    return (
      <Grid.Column key={i}>
        <Image className="attached" centered rounded src={key} size="large" />
        <Message attached="bottom" compact color='purple'>
          {descArray[i]}
        </Message>
      </Grid.Column>
    );
  })
  return (
    <div className="padded-grid">
      <Grid columns={2} stackable>
        {galleryItems}
      </Grid>
      <Divider />
    </div>
  )
}