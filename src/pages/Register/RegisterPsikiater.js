import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../redux/actions/userAction";
import { useHistory, Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  Image,
  InputGroup,
} from "react-bootstrap";

const RegisterPsikiater = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth, setDateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [experience_year, setExperienceYear] = useState("");
  const [region, setRegion] = useState("");
  const [fee, setFee] = useState("");
  const [work_address, setWorkAddress] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    dispatch(
      userAction.registerPsikiater(
        first_name,
        last_name,
        password,
        email,
        date_of_birth,
        gender,
        experience_year,
        region,
        fee,
        work_address
      )
    );
  };

  useEffect(() => {
    if (user.role === "PSIKIATER") {
      history.push("/psikiater-dashboard");
    }
  }, [user.isLogin]);

  const login = () => {
    history.push("/login");
    console.log("test");
  };

  return (
    <>
      <h2>Register as Psikiater</h2>
      <Form onSubmit={login}>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            email tidak boleh kosong.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setDateofBirth(e.target.value)}
            value={date_of_birth}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="">Choose...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Work Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Work Address"
            onChange={(e) => setWorkAddress(e.target.value)}
            value={work_address}
          ></Form.Control>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Experience Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Experience Year"
                onChange={(e) => setExperienceYear(e.target.value)}
                value={experience_year}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                placeholder="Region"
                onChange={(e) => setRegion(e.target.value)}
                value={region}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Fee</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fee"
                onChange={(e) => setFee(e.target.value)}
                value={fee}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};

export default RegisterPsikiater;
