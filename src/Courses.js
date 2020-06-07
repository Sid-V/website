import React from "react";
import { Card, Grid, Container } from "semantic-ui-react";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="padded-grid font-medium">
        <Container>
          <Grid columns={2} stackable doubling>
            <Grid.Row>
              <Grid.Column>
                <Card centered>
                  <Card.Content header="CS 381: Advanced Algorithms" />
                  <Card.Content description="Recursion, Selection, Convex Hull, Dynamic Prog, Greedy, LP, String algos: KMP, Biconnectivity, Strong Connectivity, Reductions, Intractibility, NP" />
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card centered>
                  <Card.Content header="CS 354: Operating Systems" />
                  <Card.Content description="XINU OS, Kernel arch, Isolation/Protection, Upper/Lower half kernel, Scheduling, Memory management, Virtual Memory, Asynchronous IPC, Process synchronization, Locality of reference, Device management, DMA support, File systems" />
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card centered>
                  <Card.Content header="CS 448: Relational Databases Management System" />
                  <Card.Content description="Databse models & architecture, Schemas, ER models, Disk & File storage, Indexing, SQL, Relational calc, Functional dependencies and normalization, Concurrency Control, Transaction Processing, Recovery" />
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card centered>
                  <Card.Content header="CS 373: Data mininig and Machine Learning" />
                  <Card.Content description="K-NN, Naive bayes, Perceptron,  Distance metrics, Gaussian mixture models, Pattern mining, Decision trees, Support vector machines, k-means clustering " />
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card centered>
                  <Card.Content header="CS 307: Software Engineering" />
                  <Card.Content description="Semester long project course, See Twister for more info" />
                  <a href="/projects">Click here for Twister</a>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card centered>
                  <Card.Content header="CS 251: Data Strcutures and Algorithms" />
                  <Card.Content description="Sorting, Hashing, BST, 2-3 Trees, RB Trees, Graph theory, Union Find, Regex, Reductions, Tries, Shortest path, Prim Kruskal" />
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card centered>
                  <Card.Content header="CS 252: Systems Programming" />
                  <Card.Content description="Memory allocation, Shell, Subshell, Bash scripting, Networking, Web server and retrieval" />
                </Card>
              </Grid.Column>
              <Grid.Column>
                {/* <Card centered>
                  <Card.Content header="CS 251" />
                  <Card.Content description="Data Strcutures and Algorithms" />
                </Card> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
