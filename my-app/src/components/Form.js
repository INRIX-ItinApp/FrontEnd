import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/container";
import Button from "react-bootstrap/button";
import { useLocationContext } from "../context/positionContext";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const { currentLocation, setStart } = useLocationContext();
  const [fields, setFields] = useState([
    //     {
    //     // id: 1,
    //     // task: ""
    // }
  ]);

  const handleChangeInput = (i, e) => {
    console.log(e.target.value);
    const values = [...fields];
    values[i][e.target.name] = e.target.value;
    setFields(values);
    console.log(values);
  };

  const handleAdd = (id) => {
    setFields([...fields, { id: id + 2, task: "" }]);
  };

  const handleSubtract = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields([...values]);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Mapbox";
    navigate(path);
  };

  function startingPosHandler(position) {
    let coordinates = [];
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    coordinates.push(longitude);
    coordinates.push(latitude);
    setStart(coordinates);
    console.log(coordinates);
  }

  async function handleSubmit() {
    // gets current location
    // navigator.geolocation.getCurrentPosition(startingPosHandler);
    // gets sanfrancisco coordinate because api limits to only sanfrancisco
    setStart([-122.4194, 37.7749]);
    routeChange();
    // get gpt to calculate permutations
    try {
      const response = await fetch(
        "http://inrix-flask-11.eba-bfncm3ew.us-east-2.elasticbeanstalk.com/ask_openai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question:
              "Hey I'm at Stevens Court apartment in UW. I want to go to dicks burger, go grocery shopping, and go to a bar.",
          }),
        }
      );
      const gptdata = await response.json();
      console.log(gptdata);
      const permutationArray = gptdata.message;
      permutationArray.forEach(async (coords) => {
        const inrixResponse = await fetch(
          "http://inrix-flask-11.eba-bfncm3ew.us-east-2.elasticbeanstalk.com/"
        );
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }

    // get inrix api to calculate distance and travel times for each permutation

    // fetch("http://127.0.0.1:5000/findRoute", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     pointA: "",
    //     pointB: "",
    //     pointC: "",
    //     pointD: "",
    //     bearerToken: "",
    //   }),
    // });
  }

  return (
    <div>
      <Container>
        <Row
          style={{
            fontWeight: "bold",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          {/* Task List */}
          {fields.length ? (
            <Form className="no-bullet">
              <Form.Group className="mb-3" controlId="formBasicEntry">
                {fields.map((field, i) => (
                  <div key={field.id}>
                    <Row className="align-items-center mt-5">
                      <Col md>
                        {/* <Form.Label>First Task</Form.Label> */}
                        <Form.Control
                          type="text"
                          placeholder="Enter an errand ..."
                          name="firstErrand"
                          value={field.firstErrand}
                          onChange={(e) => handleChangeInput(i, e)}
                        />
                      </Col>
                      <Col md>
                        <Button
                          disabled={fields.length === 4}
                          onClick={() => handleAdd(i)}
                          className="mt-4 mr-5"
                          style={{ float: "center" }}
                        >
                          <i className="fas fa-plus"></i>
                        </Button>
                        <Button
                          onClick={() => handleSubtract(i)}
                          className="minus-button mt-4"
                        >
                          <i className="fas fa-minus"></i>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Form.Group>
              <div style={{ float: "right", marginRight: "250px" }}>
                <Button type="submit" variant="light" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Form>
          ) : (
            <button
              style={{
                width: "250px",
                marginLeft: "353px",
                marginTop: "300px",
                margin: "auto",
              }}
              className="glow-on-hover"
              onClick={() => handleAdd(0)}
            >
              Let's Get Started!
            </button>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default FormPage;
