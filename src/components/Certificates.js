import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Certificates extends Component {
  render() {
    if (this.props.certifications) {
      var certifications = this.props.certifications.map(function (
        certification,
        i
      ) {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={certification.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <span
                className="iconify"
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
              {certification.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {certification.institution}
            </h4>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Credential
            </a>
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
            {certifications}
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

export default Certificates;
