import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiDjango,
  DiPostgresql,
  DiMysql,
  DiDocker,
  DiLinux,
} from "react-icons/di";
import {
  SiSpringboot,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiJenkins,
  SiGithub,
  SiGitlab,
  SiJira,
  SiSwagger,
  SiAmazonaws,
  SiGooglecloud,
  SiCloudflare,
  SiAnaconda,
  SiAngular,
  SiNestjs,
  SiFlask,
  SiLatex,
  SiAdobecreativecloud,
  SiCanva,
  SiTensorflow,
  SiPowerbi,
  SiGradle,
  SiApachemaven,
  SiHibernate,
  SiSonarqube,
  SiPostman,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

// Only import icons that are actually used below to avoid bundle bloat.

function Techstack() {
  return (
    <>
      {/* Frontend */}
      <h2 style={{ color: "#be6adf", marginTop: "2rem" }}>Frontend</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="React">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Angular">
          <SiAngular />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Next.js">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="TypeScript">
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="HTML5">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="CSS3">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
          <DiBootstrap />
        </Col>
      </Row>

      {/* Backend */}
      <h2 style={{ color: "#be6adf", marginTop: "2rem" }}>Backend</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Java">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Spring Boot">
          <SiSpringboot />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Node.js">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="NestJS">
          <SiNestjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Django">
          <DiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Flask">
          <SiFlask />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="GraphQL">
          <SiGraphql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="REST APIs">
          <SiSwagger />
        </Col>
      </Row>

      {/* Databases */}
      <h2 style={{ color: "#be6adf", marginTop: "2rem" }}>Databases</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="MySQL">
          <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
          <DiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="MongoDB">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Firebase">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="SQL Server">
          <SiMicrosoftsqlserver />
        </Col>
      </Row>

      {/* Tools & Others */}
      <h2 style={{ color: "#be6adf", marginTop: "2rem" }}>Tools & Others</h2>
      <p style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 1.5rem", color: "#ccc" }}>
        Here are the main DevOps, tools, and platforms I use for development, collaboration, automation, analytics, and design.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {/* DevOps */}
        <Col xs={4} md={2} className="tech-icons" title="Docker">
          <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Jenkins">
          <SiJenkins />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="AWS">
          <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
          <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Cloudflare">
          <SiCloudflare />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Linux">
          <DiLinux />
        </Col>
        {/* Tools */}
        <Col xs={4} md={2} className="tech-icons" title="Git">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="GitHub">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="GitLab">
          <SiGitlab />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Jira">
          <SiJira />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Postman">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Swagger">
          <SiSwagger />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="SonarQube">
          <SiSonarqube />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Gradle">
          <SiGradle />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Maven">
          <SiApachemaven />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Hibernate">
          <SiHibernate />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Power BI">
          <SiPowerbi />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Anaconda">
          <SiAnaconda />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
          <SiTensorflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Canva">
          <SiCanva />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Adobe Creative Cloud">
          <SiAdobecreativecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="LaTeX">
          <SiLatex />
        </Col>
      </Row>

      {/* Programming Languages */}
      <h2 style={{ color: "#be6adf", marginTop: "2rem" }}>Programming Languages</h2>
      <p style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 1.5rem", color: "#ccc" }}>
        Languages I use for building software, automation, and solving problems.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Java">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="C++">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Go">
          <TbBrandGolang />
        </Col>
        {/* Add more languages as needed */}
      </Row>
    </>
  );
}

export default Techstack;

