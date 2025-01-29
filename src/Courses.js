import React, { useEffect, useState } from "react";
import { Card, Grid, Container, GridRow, Loader } from "semantic-ui-react";
import "./App.css";

export function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://sidv-website-api.azurewebsites.net/api/courses")
      .then((response) => response.json())
      .then((json) => {
        setCourses(json);
        setIsLoaded(true);
      })
      .catch((error) => console.log("error with fetch", error));
  }, []);

  const courseCards = courses.map((course, i) => {
    return (
      <Card centered key={i}>
        <Card.Content header={course.name} />
        <Card.Content description={course.description} />
      </Card>
    );
  });

  return (
    <div>
      <Loader active={!isLoaded} content="Loading" />
      <Container>
        <Card.Group stackable doubling itemsPerRow={2}>
          {isLoaded && courseCards}
        </Card.Group>
      </Container>
    </div>
  );
}
