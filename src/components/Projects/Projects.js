import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { Helmet } from "react-helmet";

const mobileAppScreenshots = [
  "https://play-lh.googleusercontent.com/wVd2QLwVmeDTZdGCdxzIYTk0Via5HczMdofsL4-THDttxmxidZtD32Oi7b5g3oiPvg=w2560-h1440-rw", // Replace
  "https://play-lh.googleusercontent.com/ln8K3NRQkduJyBljtVrXj5-lVTwnScU2TtB1c9H5tRYyqEFqvNIOfj4K0f3PLRib_EQ=w2560-h1440-rw", // Replace
  "https://play-lh.googleusercontent.com/bqIKgr2MZ3U9zTaYtC0OhA4qS6nU01yn4x2lITjq0sW1zB-F6L0mQxLKRsAslG_3Cg=w2560-h1440-rw", // Replace
  "https://play-lh.googleusercontent.com/dUzAgLs5AYKhSgnxgTI395RcWSIKwnI2oK4lSrwVQ-OUddv3ZG0-NgL1KUDsVN2d4w=w2560-h1440-rw", // Replace
];

const juridentMobileAppScreenshots = [
  "https://play-lh.googleusercontent.com/9eyrP9vAVHEN9OjtVRQ9BTcgTLqGuEPeXtDj85QDlj7stIIf51uzq_iv_pJxlvWwk3VU=w2560-h1440-rw",
  "https://play-lh.googleusercontent.com/9Zkhy5K-rvTFZsY7HQv32pLSzOG_H8_H-siMu1EuwCaC2tFrA1MzKtAHgRQ4OBBi3A=w2560-h1440-rw",
  "https://play-lh.googleusercontent.com/3N2KE3NP9qMFfSzRWJCsNi15GnumzefcNCHORHuNcOZ3njhBEqVY78_CxTnTTv50wwI=w2560-h1440-rw",
  "https://play-lh.googleusercontent.com/O34WFsUHHJsEM_d76a2_dTjdeEXukh8EGB2Lv2F9T1kMEF7FeRzp7A6umJkAKb7OnKU=w2560-h1440-rw",
];

const ecommerceMobileAppScreenshots = [
  "https://private-user-images.githubusercontent.com/76736055/267128213-d2121c49-14ae-461d-acdb-3b3bea786c12.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUxNzM3NzgsIm5iZiI6MTc0NTE3MzQ3OCwicGF0aCI6Ii83NjczNjA1NS8yNjcxMjgyMTMtZDIxMjFjNDktMTRhZS00NjFkLWFjZGItM2IzYmVhNzg2YzEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDIwVDE4MjQzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY4ODczYTJhZGI3ZDNjNDNiNWJlM2RmNzgzYmFhODZlYTcxOTIwNWVkZTI0OWFlNzIyNDdmMmUxNDJhMTM3ZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.9hohT8n7OHLTGnCTJtY3A27yRgJGUqYYvc2x6DGgCQk",
  "https://user-images.githubusercontent.com/76736055/228969459-bfdc136f-4864-4f61-9720-ef0d27d03e8d.png",
];


const taskManagementImage =
  "https://via.placeholder.com/600x400/FFA500/FFFFFF?text=Task+Management+App"; // Example single primary image URL
const weatherAppImage =
  "https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Weather+App"; // Example single primary image URL

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Indresh Goswami</title>
        {/* Ensure canonical link points to the correct page if needed */}
        {/* <link rel="canonical" href="https://indreshgoswami.tech/projects" /> */}
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
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              screenshotUrls={mobileAppScreenshots}
              isApp={true}
              title="Turns Fleet App"
              description="A driver route app is a mobile application designed for the garment care business, specifically built to help manage pickup and delivery for residential and commercial laundry services. It supports both on-demand and static routes, ensuring efficient navigation for drivers. Tailored for B2B purposes, the app operates with predefined business accounts, providing secure access for registered users. Additionally, it offers essential support features like help centers and customer service, making it a vital tool for drivers to manage their daily tasks and business operations seamlessly from their mobile devices."
              playStoreLink="https://play.google.com/store/apps/details?id=com.turnsapp.fleetAndroid&hl=en_IN"
              appStoreLink="https://apps.apple.com/us/app/turns-fleet/id1666840554"
            />
          </Col>

          <Col md={4} className="project-card mb-4">
            <ProjectCard
              screenshotUrls={juridentMobileAppScreenshots}
              isApp={true}
              title="Jurident App"
              description="Jurident is strategically positioned to empower lawyers, law firms, and law students and generate significant revenue streams. Focused on bridging the gap between theoretical learning and practical application, Jurident's distribution in law colleges aims to equip students with essential tools for success."
              playStoreLink="https://play.google.com/store/apps/details?id=com.jurident.valsco&hl=en_IN"
              appStoreLink="https://apps.apple.com/in/app/jurident/id6475091173"
            />
          </Col>

          <Col md={4} className="project-card mb-4">
            <ProjectCard
              screenshotUrls={ecommerceMobileAppScreenshots}
              isApp={true}
              title="E-commerce App"
              description="A user-friendly mobile application designed for seamless online shopping. Features include product listing, detailed product views, cart management, secure checkout, and order tracking. Built with a focus on performance and responsive design, the app integrates API-based data handling, local storage for offline access, and supports user authentication for a personalized experience."
              ghLink="https://github.com/indresh149/flutter_shop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
