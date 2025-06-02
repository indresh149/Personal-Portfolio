import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle"; // Assuming Particle is in ../Particle
import { Link } from "react-router-dom"; // Import Link for navigation
import { SiFlutter, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si"; // Import tech icons
import "./TechStack.css"; // We'll create this CSS file

// Define your tech stacks
const techStacks = [
  {
    name: "Flutter",
    icon: <SiFlutter size={70} className="tech-icon flutter-icon" />,
    description: "Cross-platform mobile app development framework for building beautiful native apps.",
    link: "/projects", // Link to the projects page (could potentially filter later)
  },
  {
    name: "React",
    icon: <SiReact size={70} className="tech-icon react-icon" />,
    description: "JavaScript library for building user interfaces, especially single-page applications.",
    link: "/projects",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={70} className="tech-icon node-icon" />,
    description: "Back-end JavaScript runtime environment for building scalable network applications.",
    link: "/projects",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={70} className="tech-icon mongo-icon" />,
    description: "NoSQL database program, using JSON-like documents with optional schemas.",
    link: "/projects",
  },
  // Add more tech stacks as needed
];

function TechStack() {
  return (
    <Container fluid className="tech-stack-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Core <strong className="purple">Technologies</strong>
        </h1>
        <p style={{ color: "white" }}>
          Technologies I frequently work with. Click to see related projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {techStacks.map((tech, index) => (
            <Col md={4} lg={3} className="tech-card-col mb-4" key={index}>
              {/* Wrap Card with Link */}
              <Link to={tech.link} style={{ textDecoration: 'none' }}>
                <Card className="tech-card-view h-100">
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="tech-icon-container mb-3">
                      {tech.icon}
                    </div>
                    <Card.Title className="tech-title">{tech.name}</Card.Title>
                    <Card.Text className="tech-description">
                      {tech.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default TechStack;