import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience & Achievements</h2>
            <div className={styles.content}>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.header}>
                                    <h3 className={styles.role}>{historyItem.role}</h3>
                                    <p className={styles.timeline}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                </div>
                                <p className={styles.organisation}>{historyItem.organisation}</p>
                                <p className={styles.description}>
                                    {historyItem.experiences.join(' ')}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};