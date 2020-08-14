import React, { useEffect, useState } from "react";
import { Card, Grid, Container, GridRow } from "semantic-ui-react";
import "./App.css";

export function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {    
    fetch("http://sidv-website-api.azurewebsites.net/api/courses")
      .then(response => response.json())
      .then(json => setCourses(json))
      .catch(error => console.log('error with fetch', error));
    }, []);

    const courseCards = courses.map((course, i) => {
      return (
        <Card centered key={i}>
          <Card.Content header={course.name} />
          <Card.Content description={course.description} />
        </Card>
      )
    })
    
    return (
      <div className="padded-grid font-medium">
        <Container>
          <Grid columns={2} stackable doubling relaxed>
            <GridRow>
              <Card.Group itemsPerRow={2}>
              {courseCards}
              </Card.Group>
            </GridRow>
          </Grid>
        </Container>   
      </div>
    ); 
}