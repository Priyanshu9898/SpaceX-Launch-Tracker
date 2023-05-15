import React from "react";
import { Card,  Col, Row } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Row xs={1} md={2} lg={4}>
      {props.data.map((item, index) => (
        <Col key={index} className="mb-4">
          <Card style={{ border: 'none' }}>
            <Card.Img variant="top" src={item.links.mission_patch} />
            <Card.Body>
              <Card.Title style={{color: "#8243b6"}}>{item.mission_name} #{item.flight_number}</Card.Title>
              <Card.Text>
                <b>Mission Ids:</b>
                <ul>
                  {item.mission_id.map((id) => (
                    <li key={id}>{id}</li>
                  ))}
                </ul>
                <b>Launch Year:</b> {item.launch_year} <br />
                <b>Successful Launch:</b> {String(item.launch_success)} <br />
                <b>Successful Landing:</b>{" "}
                {item.rocket.first_stage.cores[0].land_success !== null
                  ? String(item.rocket.first_stage.cores[0].land_success)
                  : "N/A"}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
