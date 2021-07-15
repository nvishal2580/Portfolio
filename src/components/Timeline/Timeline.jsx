import React from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineData } from "../../Data/Details";
import TimelineDiv from "./TimelineDiv";
import Wave from "../../Data/images/wave5_up.svg";
import Wave2 from "../../Data/images/wave.svg";
import "./Timeline.css";
const TimeLine = () => {
  return (
    <Container
      fluid
      className="mt-4 mb-4"
      style={{ backgroundColor: "#E2E0FF", padding: "0px" }}
      id="timeline"
    >
      <img
        style={{
          zIndex: 10,
          position: "relative",
          backgroundColor: "#fff",
        }}
        src={Wave}
        alt="waveform"
      />
      <div className="timeline-title text-center"># TimeLine</div>
      <div style={{ background: "#E2E0FF" }}>
        <VerticalTimeline>
          {TimelineData.map((data) => (
            <TimelineDiv data={data} id={data.id} />
          ))}
        </VerticalTimeline>
      </div>
      <img
        style={{
          zIndex: 10,
          position: "relative",
          backgroundColor: "#fff",
        }}
        src={Wave2}
        alt="wave"
      />
    </Container>
  );
};

export default TimeLine;
