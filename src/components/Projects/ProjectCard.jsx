import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, skills, source }, // Removed imageSrc and demo
}) => {
  return (
    <div className={styles.container}>
      {/* Removed the <img> tag for the project image */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          GitHub
        </a>
        {/* Removed the Demo button */}
      </div>
    </div>
  );
};