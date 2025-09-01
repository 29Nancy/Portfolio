import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.educationItems}>
                <div className={styles.item}>
                    <div className={styles.leftContent}>
                        <div className={styles.collegeHeader}>
                            <h3 className={styles.institution}>Ajay Kumar Garg Engineering College</h3>
                            <div className={styles.collegeMeta}>
                                <p className={styles.date}>2022 - 2026</p>
                                <p className={styles.cgpa}>CGPA: 7.56</p>
                            </div>
                        </div>
                        <p className={styles.details}>Bachelor of Technology | Information Technology</p>
                        <div className={styles.coursesContainer}>
                            <p className={styles.courseHeader}>Relevant Coursework</p>
                            <div className={styles.coursesList}>
                                <span className={styles.courseItem}>Data Structures & Algorithms</span>
                                <span className={styles.courseItem}>Software Engineering</span>
                                <span className={styles.courseItem}>Artificial Intelligence</span>
                                <span className={styles.courseItem}>Cloud Computing</span>
                                <span className={styles.courseItem}>Operating Systems</span>
                                <span className={styles.courseItem}>Computer Networks</span>
                                <span className={styles.courseItem}>Computer Architecture & Organization</span>
                                <span className={styles.courseItem}>Database Management Systems</span>
                                <span className={styles.courseItem}>Computer Architecture & Organization</span>
                                <span className={styles.courseItem}>Object-Oriented Programming</span>
                                <span className={styles.courseItem}>Probability & Statistics</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.leftContent}>
                        <h3 className={styles.institution}>Kendriya Vidyalaya KNN Ghaziabad</h3>
                        <div className={styles.schoolDetails}>
                            <div className={styles.schoolItem}>
                                <p className={styles.details}>Class XII, CBSE</p>
                                <p className={styles.percentage}>Percentage: 90%</p>
                            </div>
                            <div className={styles.schoolItem}>
                                <p className={styles.details}>Class X, CBSE</p>
                                <p className={styles.percentage}>Percentage: 92.8%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};