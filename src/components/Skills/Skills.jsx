import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json"; // This file will contain your skills data

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                {skillsData.map((category, index) => {
                    return (
                        <div key={index} className={styles.category}>
                            <h3 className={styles.categoryTitle}>{category.category}</h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill, skillIndex) => {
                                    return (
                                        <div key={skillIndex} className={styles.skillItem}>
                                            <img
                                                src={`/assets/${skill.imageSrc}`}
                                                alt={skill.name}
                                                className={styles.skillIcon}
                                            />
                                            <p className={styles.skillName}>{skill.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};