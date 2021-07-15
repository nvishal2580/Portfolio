import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "react-bootstrap";
import { getTagColor } from "../../Data/Details";
const TimelineDiv = ({ data }) => {
  const { title, date, subtitle, details } = data;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <Badge
        style={{
          fontSize: "15px",
          backgroundColor: `${getTagColor(data.label)}`,
          color: "#fff",
        }}
      >
        {data.label}
      </Badge>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: "30px" }}>{title}</div>
        <div style={{ flex: 1 }}>{""}</div>
      </div>
      <h5 className="vertical-timeline-element-subtitle">{subtitle}</h5>
      <p>{details}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineDiv;
