import React from "react";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.gamingRoom}>
          <img src="/images/hero-image.png" alt="" />
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"about/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"about/serverIcon.png"} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"about/cursorIcon.png"} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>3D Art Enthusiast</h3>
              <p>
                I trying to learn 3D art and create animations, models and a lot
                more...{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
