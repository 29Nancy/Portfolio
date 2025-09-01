import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <p className={styles.aboutParagraph}>
                     
                    Currently pursuing a Bachelor of Technology in Information Technology, I have a strong foundation 
                    in Data Structures and Algorithms and am dedicated to crafting elegant and high-quality digital 
                    solutions that are both efficient and innovative. I believe in building technology that has a real impact,
                    and I'm actively seeking opportunities to apply my skills and contribute to meaningful work.
                </p>

                <div className={styles.skillsSection}>
                    <h3 className={styles.skillsTitle}>What I'm Doing</h3>
                    <ul className={styles.skillsGrid}>
                        <li className={styles.skillItem}>
                            <div className={styles.skillContent}>
                                <h3>Frontend Development</h3>
                                <p>Specialize in crafting responsive and dynamic user interfaces using modern frameworks. </p>
                            </div>
                        </li>
                        <li className={styles.skillItem}>
                            <div className={styles.skillContent}>
                                <h3>Backend Development</h3>
                                <p>Build robust, high-performance backend systems and APIs & focus on developing clean, scalable, and secure server-side logic.</p>
                            </div>
                        </li>
                        <li className={styles.skillItem}>
                            <div className={styles.skillContent}>
                                <h3>AI/ML Development</h3>
                                <p>Passionate about developing intelligent systems using machine learning models to deliver innovative solutions with tangible results.</p>
                            </div>
                        </li>
                        <li className={styles.skillItem}>
                            <div className={styles.skillContent}>
                                <h3>Problem-Solving & Core CS</h3>
                                <p>Strong foundation in DSA and consistently work on honing my skills to tackle complex technical challenges by writing efficient and optimized code. </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};