import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import TicTacToe from "../../Assets/Projects/tictactoe.png";
//import suicide from "../../Assets/Projects/suicide.png";
import taskManagement from "../../Assets/Projects/task-management.jpg";
import Weather from "../../Assets/Projects/weather.jpg";
import { Helmet } from "react-helmet";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Indresh Goswami</title>
        <link rel="canonical" href="https://indreshgoswami.tech/" />
      </Helmet>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="TicTacToe"
              description="Play Tic Tac Toe with friends or against the computer build with react.js. Win by getting three X's or O's in a row!."
              ghLink="https://github.com/indresh149/game---react-js"
              demoLink="https://game-react-js.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManagement}
              isBlog={false}
              title="Task Management"
              description="A simple task management web app build with react.js. Add, delete and mark task as completed. The app uses framer motion for animations."
              ghLink="https://github.com/indresh149/Task-Management-WebApp"
              demoLink="https://task-management-web-app-woad.vercel.app/"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="A simple weather app build with React Native. Get the current weather of any city in the world. The app uses openweathermap api to fetch the weather data."
              ghLink="https://github.com/indresh149/weatherApp"
              demoLink="https://drive.google.com/drive/folders/1PoTzmwPk1CgVo_tXRCYDkzViq4th9Uou"              
            />
          </Col>

          {/*   <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              demoLink=""     
            />
  </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
