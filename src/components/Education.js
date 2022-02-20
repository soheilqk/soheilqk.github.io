import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.education) {
      var educations = this.props.education.map(function (education, i) {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={education.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <span
                class="iconify"
                data-icon="carbon:education"
                data-width="96"
              ></span>
            }
            key={i}
          >
            {/* <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div> */}

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {education.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {education.university}
            </h4>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                Education
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-12 ">
          <VerticalTimeline>
            {educations}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
