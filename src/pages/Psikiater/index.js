import React from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "../../components/Sidebar/index";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import PsikiaterDashboardRoute from "./PsikiaterDashboardRoute";

const Index = () => {
  const { path, url } = useRouteMatch();

  return (
    <Router>
      <Row style={{ marginRight: "0px" }}>
        <Col lg="2" sm="12">
          <SideBar />
        </Col>
        <Col lg="9" sm="12">
          <PsikiaterDashboardRoute path={path} />
        </Col>
      </Row>
    </Router>
  );
};

export default Index;
