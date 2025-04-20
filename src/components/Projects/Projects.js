// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// //import leaf from "../../Assets/Projects/leaf.png";
// //import emotion from "../../Assets/Projects/emotion.png";
// //import editor from "../../Assets/Projects/codeEditor.png";
// import TicTacToe from "../../Assets/Projects/tictactoe.png";
// //import suicide from "../../Assets/Projects/suicide.png";
// import taskManagement from "../../Assets/Projects/task-management.jpg";
// import Weather from "../../Assets/Projects/weather.jpg";
// import { Helmet } from "react-helmet";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Projects | Indresh Goswami</title>
//         <link rel="canonical" href="https://indreshgoswami.tech/" />
//       </Helmet>
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//         <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={TicTacToe}
//               isBlog={false}
//               title="TicTacToe"
//               description="Play Tic Tac Toe with friends or against the computer build with react.js. Win by getting three X's or O's in a row!."
//               ghLink="https://github.com/indresh149/game---react-js"
//               demoLink="https://game-react-js.vercel.app/"
//             />
//           </Col>
          
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { Helmet } from "react-helmet";

// Define image URLs directly or import them if preferred (though URLs are requested)
// Example URLs (replace with your actual image links)
// const ticTacToeScreenshots = [
//   "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=TicTacToe+Screen+1", // Replace
//   "https://via.placeholder.com/300x200/00FF00/FFFFFF?text=TicTacToe+Screen+2", // Replace
// ];

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
  "https://user-images.githubusercontent.com/76736055/228969459-bfdc136f-4864-4f61-9720-ef0d27d03e8d.png"
];




// Example URLs for other projects (replace)
const taskManagementImage = "https://via.placeholder.com/600x400/FFA500/FFFFFF?text=Task+Management+App"; // Example single primary image URL
const weatherAppImage = "https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Weather+App"; // Example single primary image URL


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

          {/* Example 1: Web Project (like original TicTacToe) */}
          {/* <Col md={4} className="project-card mb-4"> {/* Added mb-4 for spacing 
            <ProjectCard
              // primaryImgUrl={"URL_TO_MAIN_IMAGE_IF_NEEDED"} // Optional primary image
              screenshotUrls={ticTacToeScreenshots} // Pass array of screenshot URLs
              isApp={false} // It's a web project
              title="TicTacToe Game"
              description="Play Tic Tac Toe with friends or against the computer. Built with React.js. Win by getting three X's or O's in a row!"
              ghLink="https://github.com/indresh149/game---react-js"
              demoLink="https://game-react-js.vercel.app/" // Web demo link
              
            />
          </Col> */}

          {/* Example 2: Mobile App Project */}
          <Col md={4} className="project-card mb-4"> {/* Added mb-4 for spacing */}
            <ProjectCard
              screenshotUrls={mobileAppScreenshots} // Pass array of screenshot URLs
              isApp={true} // It's a mobile app project
              title="Turns Fleet App"
              description="A driver route app is a mobile application designed for the garment care business, specifically built to help manage pickup and delivery for residential and commercial laundry services. It supports both on-demand and static routes, ensuring efficient navigation for drivers. Tailored for B2B purposes, the app operates with predefined business accounts, providing secure access for registered users. Additionally, it offers essential support features like help centers and customer service, making it a vital tool for drivers to manage their daily tasks and business operations seamlessly from their mobile devices."
            //  ghLink="https://github.com/yourusername/awesome-mobile-app" // Optional GitHub link
              // No web demo link (or could add if applicable)
              playStoreLink="https://play.google.com/store/apps/details?id=com.turnsapp.fleetAndroid&hl=en_IN" // Example Play Store link
              appStoreLink="https://apps.apple.com/us/app/turns-fleet/id1666840554" // Example App Store link
            />
          </Col>

          <Col md={4} className="project-card mb-4"> {/* Added mb-4 for spacing */}
            <ProjectCard
              screenshotUrls={juridentMobileAppScreenshots} // Pass array of screenshot URLs
              isApp={true} // It's a mobile app project
              title="Jurident App"
              description="Jurident is strategically positioned to empower lawyers, law firms, and law students and generate significant revenue streams. Focused on bridging the gap between theoretical learning and practical application, Jurident's distribution in law colleges aims to equip students with essential tools for success."
            //  ghLink="https://github.com/yourusername/awesome-mobile-app" // Optional GitHub link
              // No web demo link (or could add if applicable)
              playStoreLink="https://play.google.com/store/apps/details?id=com.jurident.valsco&hl=en_IN" // Example Play Store link
              appStoreLink="https://apps.apple.com/in/app/jurident/id6475091173" // Example App Store link
            />
          </Col>

          <Col md={4} className="project-card mb-4"> {/* Added mb-4 for spacing */}
            <ProjectCard
              screenshotUrls={ecommerceMobileAppScreenshots} // Pass array of screenshot URLs
              isApp={true} // It's a mobile app project
              title="E-commerce App"
              description="A user-friendly mobile application designed for seamless online shopping. Features include product listing, detailed product views, cart management, secure checkout, and order tracking. Built with a focus on performance and responsive design, the app integrates API-based data handling, local storage for offline access, and supports user authentication for a personalized experience."
              ghLink="https://github.com/indresh149/flutter_shop" // Optional GitHub link
              // No web demo link (or could add if applicable)
              // playStoreLink="https://play.google.com/store/apps/details?id=com.turnsapp.fleetAndroid&hl=en_IN" // Example Play Store link
              // appStoreLink="https://apps.apple.com/us/app/turns-fleet/id1666840554" // Example App Store link
            />
          </Col>

          {/* Example 3: Another Web Project (using only one screenshot perhaps) */}
          {/* <Col md={4} className="project-card mb-4"> {/* Added mb-4 for spacing 
            <ProjectCard
               screenshotUrls={[taskManagementImage]} // Pass array with one URL
              // Or use a primary image prop if you implemented that
              // primaryImgUrl={taskManagementImage}
              isApp={false}
              title="Task Management Web App"
              description="A simple and effective web tool to manage your daily tasks and boost productivity. Built with MERN stack."
              ghLink="https://github.com/yourusername/task-manager"
              demoLink="https://your-task-manager-demo.com"
            />
          </Col> */}

           {/* Example 4: Project with only GitHub link */}
          {/* <Col md={4} className="project-card mb-4"> {/* Added mb-4 for spacing 
            <ProjectCard
              screenshotUrls={[weatherAppImage]} // Pass array with one URL
              isApp={false}
              title="Weather CLI Tool"
              description="A command-line interface tool to quickly check the weather forecast for any city. Built with Node.js."
              ghLink="https://github.com/yourusername/weather-cli"
              // No demo link needed for a CLI tool perhaps
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
