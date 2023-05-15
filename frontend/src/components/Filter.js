import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


const Filter = ({ filters, setFilters }) => {
  const launchYears = Array.from({ length: 2025 - 2006 }, (_, i) => 2006 + i);
  const successOptions = ["true", "false"];

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

 

  const renderButtons = (name, options) => (
    <Row>
      {options.map((option, i) => (
        <Col key={i} xs={6} className="mb-2">
          <Button
            style={{
              backgroundColor: filters[name] === option ? "#1ec61e" : "rgb(183 233 165)",
              color: "black",
              borderColor: "#008000",
              padding: "5px 20px"
            }}
            onClick={() => handleFilterChange(name, option)}
          >
            {option}
          </Button>
        </Col>
      ))}
    </Row>
  );

  return (
    <Form >
      {/* Launch Year Filter */}
      <h4>Filters</h4>
      <Form.Group controlId="launchYear">
        <h5 className="text-center mt-2">Launch Year</h5>
        <hr/>
        {renderButtons("launch_year", launchYears)}
      </Form.Group>

      {/* Successful Launch Filter */}
      <Form.Group controlId="launchSuccess">
        <h5 className="text-center mt-3">Successful Launch</h5>
        <hr/>
        {renderButtons("launch_success", successOptions)}
      </Form.Group>

      {/* Successful Landing Filter */}
      <Form.Group controlId="landSuccess">
        <h5 className="text-center mt-3">Successful Landing</h5>
        <hr/>
        {renderButtons("land_success", successOptions)}
      </Form.Group>

    </Form>
  );
};

export default Filter;
