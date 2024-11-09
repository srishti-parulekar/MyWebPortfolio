import React from "react";

import styles from "./Acheivements.module.css";
import { getImageUrl } from "../../utils";

export const Acheivements = () => {
  return (
    <section className={styles.container} id="acheivements">
      <h2 className={styles.title}>Acheivements</h2>
      <div className={styles.content}>
        
        <ul className={styles.acheivementsItems}>
          <li className={styles.acheivementsItem}>
            <img src={getImageUrl("acheivements/laptop.png")} alt="Laptop" />
            <div className={styles.acheivementsItemText}>
              <h3>Hackathon Acheivement!</h3>
              <p>
                My team - BigO(4) recently won the Larry Page Award at Bajaj Hackrx 5.0!
              </p>
            </div>
          </li>
          <li className={styles.acheivementsItem}>
            <img src={getImageUrl("acheivements/Oration.png")} alt="Oration" />
            <div className={styles.aboutItemText}>
              <h3>Speaker</h3>
              <p>
              Over the years, I have participated in multiple state-level oration and speech competitions, which has helped me become a confident speaker and natural leader.              </p>
            </div>
          </li>
          <li className={styles.acheivementsItem}>
            <img src={getImageUrl("acheivements/music.png")} alt="Music" />
            <div className={styles.acheivementsItemText}>
              <h3>Hobbies</h3>
              <p>
                Outside of programming, I also enjoy playing different musical instruments and enjoy reading in my free time.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};