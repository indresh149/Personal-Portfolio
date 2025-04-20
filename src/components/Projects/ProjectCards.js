// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}

       

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;


import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaApple, FaGooglePlay } from "react-icons/fa"; // Import app store icons

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100"> {/* Added h-100 for consistent height if needed */}
      {/* Optional: Keep a primary image if desired */}
      {/* {props.primaryImgUrl && <Card.Img variant="top" src={props.primaryImgUrl} alt="card-img" />} */}

      <Card.Body className="d-flex flex-column"> {/* Use flexbox for layout */}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}> {/* Allow description to grow */}
          {props.description}
        </Card.Text>

        {/* Section for Screenshots */}
        {props.screenshotUrls && props.screenshotUrls.length > 0 && (
          <div className="mb-3"> {/* Add margin below screenshots */}
            <Row xs={2} md={2} className="g-2"> {/* Grid for screenshots (2 columns) */}
              {props.screenshotUrls.slice(0, 4).map((url, index) => ( // Limit to 4 screenshots
                <Col key={index}>
                  <img
                    src={url}
                    alt={`${props.title} screenshot ${index + 1}`}
                    className="img-fluid rounded" // Make image responsive and slightly rounded
                    style={{ aspectRatio: '16/9', objectFit: 'cover' }} // Maintain aspect ratio
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Section for Buttons */}
        <div className="mt-auto"> {/* Push buttons to the bottom */}
          {/* GitHub Button */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* App Store Links (Conditional) */}
          {props.isApp && (
            <>
              {props.playStoreLink && (
                <Button
                  variant="primary"
                  href={props.playStoreLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                  aria-label="Google Play Store Link"
                >
                  <FaGooglePlay /> &nbsp; Play Store
                </Button>
              )}
              {props.appStoreLink && (
                <Button
                  variant="primary"
                  href={props.appStoreLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                  aria-label="Apple App Store Link"
                >
                  <FaApple /> &nbsp; App Store
                </Button>
              )}
            </>
          )}

          {/* Website Demo Link (Conditional) */}
          {!props.isApp && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
