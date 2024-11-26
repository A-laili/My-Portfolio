import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import work from "../../Assets/Projects/work.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import fit from "../../Assets/Projects/fit.png";
import girlies from "../../Assets/Projects/girlies.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={chatify}
              isBlog={false}
              title="Hotel-Mazagan"
              description="The Hotel Management System is a comprehensive web application designed to streamline hotel operations, including room management, customer reservations, and administrative tasks. Built using Spring Boot for the backend, React with Vite for the frontend, and secured with JWT and Spring Security for authentication and authorization, this system provides an efficient platform for hotel management. Key features include the ability to manage rooms (add, modify, delete), handle reservations (with detailed information on check-in and check-out dates), and monitor key metrics through an admin dashboard. The application is easy to set up with Docker or a local deployment option, and it supports user and admin roles for controlled access to the system."
              ghLink="https://github.com/A-laili/Hotel-Mazagan.git"
              demoLink="https://github.com/A-laili/Projet_Hotel/assets/147451080/0f0abc75-2f77-4e7c-a664-a459a9ef8c43"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fit}
              isBlog={false}
              title="Calories Calculator"
              description="The Calories Calculator is a mobile application designed to help users track and manage their daily calorie intake and expenditure. Built with Flutter for a cross-platform experience, this app provides an intuitive interface for calculating calories based on user inputs such as age, weight, height, activity level, and fitness goals. The app also offers personalized nutrition advice and macronutrient distribution, helping users optimize their diet for weight loss, muscle gain, or general fitness. With its real-time tracking and user-friendly design, the Calories Calculator empowers individuals to make informed decisions about their health and fitness."
              ghLink="https://github.com/A-laili/calories_calcul.git"
              demoLink="https://github.com/user-attachments/assets/ad7530fb-3ecf-4728-82ef-b40719786bf1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ISIC GPR"
              description="ISIC GPR is a web application, designed to provide a user-friendly interface for managing the resources of ISIC's students. The primary goal of this project is to streamline the management of resources by allowing users to add, modify, and delete entries, as well as display a list of existing resources and manage access permissions. The application is built using Google Sites for a responsive UI, AppScript for fast development"
              ghLink="https://github.com/A-laili/Isic-GPR.git"
              demoLink="https://sites.google.com/view/isic-gpr/accueil"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work} // Replace with an appropriate image for the project
              isBlog={false}
              title="Workforce and Department Management System"
              description="This web application facilitates the management of employees and departments, using JavaServer Faces (JSF) for the user interface and Hibernate as the ORM framework for data management. Key features include employee and department management, with options to add, update, delete, and display detailed records. Additionally, it provides statistical insights and seamless integration with MySQL for data persistence."
              ghLink="https://github.com/your-username/WorkforceManagementSystem.git" // Replace with your GitHub repository link
              demoLink="https://www.your-demo-link.com" // Add a demo link if available
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion} // Replace with an image representing MoviesApp
              isBlog={false}
              title="MoviesApp"
              description="MoviesApp is a mobile application developed with React Native that provides users access to a vast movie database via an external API. It includes features such as movie search, trailer viewing, nearby cinema location, and facial recognition to estimate the user's age. If the detected age is below the required age for the movie, access is restricted. A comprehensive solution for movie enthusiasts!"
              ghLink="https://github.com/your-username/MoviesApp.git" // Replace with your GitHub repository link
              // demoLink="https://www.your-demo-link.com" // Add a demo link if available
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={girlies}
              isBlog={false}
              title="Girls-Calendar"
              description="Girls-Calendar is a unique calendar that highlights the birthdays and achievements of incredible women from around the world. From scientists and artists to activists and leaders, this calendar showcases the diversity and talent of women who have made a significant impact on society."
              ghLink="https://github.com/A-laili/Girls-Calendar.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
