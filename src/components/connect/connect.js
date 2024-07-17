import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
//import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
//import TicTacToe from "../../Assets/Projects/tictactoe.png";
import linktreeQr from "../../Assets/Projects/linktreeqr.jpg";
//import suicide from "../../Assets/Projects/suicide.png";
//import taskManagement from "../../Assets/Projects/task-management.jpg";
//import Weather from "../../Assets/Projects/weather.jpg";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
//import { CgWebsite } from "react-icons/cg";
//import { BsGithub } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";


function Connect() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Connect | Indresh Goswami</title>
        <link rel="canonical" href="https://indreshgoswami.tech/" />
      </Helmet>
      <Particle />
      <Container>
        <h1 className="project-heading">
          Connect with <strong className="purple">me </strong>
        </h1>
        
        <Card>
        <Button variant="primary" href={"https://linktr.ee/indreshgoswami"} target="_blank">
        <SiLinktree /> &nbsp;
        linktr.ee/indreshgoswami
      </Button>
      </Card>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Image
              src={linktreeQr}
              alt="Linktree QR Code"
              fluid
              style={{ height: "335px", width: "800px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Connect;
