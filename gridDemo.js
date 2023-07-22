import React from "react";
import { Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export default function GridDemo() {
  return (
    <Grid>
      <Col>
        <Row style={{ backgroundColor: "red" }}>
          <Text>1</Text>
        </Row>
        <Row>
          <Col>
            <Row style={{ backgroundColor: "white" }}></Row>
            <Row style={{ backgroundColor: "purple" }}></Row>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <Row style={{ backgroundColor: "yellow" }}></Row>
            <Row style={{ backgroundColor: "skyblue" }}></Row>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "green" }}></Row>
      </Col>
    </Grid>
  );
}
