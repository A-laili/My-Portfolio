import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // Replace with your exact GitHub username (case-sensitive)
  const username = "A-laili";

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username={username}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        // Optionally, add a transform to show a message if no data
        transformData={(data) =>
          data && data.length > 0 ? data : [{ date: "", count: 0 }]
        }
        // Optionally, add a loading or error fallback
        // See https://github.com/grubersjoe/react-github-calendar#props
      />
      <div style={{ color: "#aaa", marginTop: "1rem", fontSize: "0.95em" }}>
        Note: Only public GitHub contributions are shown here. Private
        contributions are not included due to GitHub API limitations.
      </div>
    </Row>
  );
}

export default Github;
