import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/college.png")} alt="College icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I'm a third year Computer Science Engineering student at Symbiosis Institute of Technology, Pune.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/code.png")} alt="Code icon" />
            <div className={styles.aboutItemText}>
              <h3>Programming Skills</h3>
              <p>
                I enjoy coding in Java and Python. I'm currently learning Springboot Framework, React JS and AWS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/teamwork.png")} alt="Teamwork" />
            <div className={styles.aboutItemText}>
              <h3>Soft Skills</h3>
              <p>
                My three principles for executing a project well consist of Teamwork, Leadership and Brainstorming.
              </p>
            </div>
          </li>
        </ul>
      </div>
      
    </section>
  );
};