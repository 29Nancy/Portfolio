import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <p className={styles.text}>Made with ❤️ by Nancy Tyagi @ {new Date().getFullYear()}</p>
        </footer>
    );
};