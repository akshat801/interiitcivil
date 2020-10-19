import React from "react";
import Case from "./src/case.jpg";
import pg from "./src/pg.jpg";
import model from "./src/model.jpg";
import guest from "./src/guest.jpg";
import styles from "./src/events.module.css";
import Navbar from "../home/Navbar";
import Contact from "../home/Contact";
import { Link } from "react-router-dom";
import headImage from "./src/head.png";
import Problem1 from "./src/Model Expo.pdf";
import Problem2 from "./src/Research Work Presentation.pdf";
export default class Events extends React.Component {
  render() {
    const events = [
      {
        title: "Case Studies",
        description:
          "This incorporates the Presentation of Solutions to the Problem Statement given by the Industry. A team from each IIT will have a span of a month to prepare and come up with the Innovative and Sustainable Solution to the Problem Statement. The judging criteria will be decided by the concerned authority from the industry itself. The winners will be provided with Medals,Certificates, Trophy and Goodies.",
        image: Case,
      },
      {
        title: "UG, PG & PhD Research Work Presentation",
        description:
          "Each Contingent from each IIT will consist of members of PG and Ph.D students who will be presenting their Research Work In front of the committee consisting of veterans from every discipline of Civil Engineering. The Best Research Paper Work Award will be given in each discipline.",
        image: pg,
        problem: Problem2,
      },
      // {
      //     title:'model exhibition',
      //     description:'The objective of this event is to encourage students to design and build a civil engineering model by applying their knowledge and creativity. The Model should be economically viable, technologically feasible and most importantly sustainable. A problem statement will be given on which students will be supposed to create the model. Judgment will be done by IIT professors based on the discipline of the problem statement.The winners will be provided with Medals,Certificates, Trophy and Goodies.',
      //     image:model,
      //     problem:Problem1
      // },
      {
        title: "guest lectures",
        description:
          "A series of lectures covering all disciplines of Civil Engineering by eminent speakers who are Industry leaders today. Guest lectures will be open for all the students and will be compulsory for all contingents to attend.",
        image: guest,
      },
    ];
    return (
      <div>
        <Navbar />
        <div className={styles.eventsHead}>
          <p className={styles.heading}>events</p>
          <hr className={styles.eventsHr} />
          <img src={headImage} alt="" />
        </div>
        <div>
          {events
            ? events.map((list, index) => {
                return (
                  <div className={styles.eventsChild}>
                    <div className={styles.subEvent}>
                      <p className={styles.eventTitle}>{list.title}</p>
                      <p className={styles.eventDescription}>
                        {list.description}
                      </p>
                      {list.title === "guest lectures" ? null : list.title ===
                        "Case Studies" ? (
                        <Link className={styles.readProblem} to="/problems">
                          read problem statements
                        </Link>
                      ) : (
                        <a
                          href={list.problem}
                          className={styles.readProblem}
                          download="problem"
                        >
                          DOWNLOAD PROBLEM
                        </a>
                      )}
                    </div>
                    <div>
                      <img
                        className={styles.eventsImage}
                        src={list.image}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <Contact />
      </div>
    );
  }
}
