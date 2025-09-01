import React from "react";
import styles from "./Hero.module.css";
//import { getImageUrl } from "../../util";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Hero = () => {

    const [text] = useTypewriter({
        words: ["👋 Hi, I'm Nancy Tyagi"],
        loop: false,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    const [description] = useTypewriter({
        words: ["I'm a passionate developer with a strong focus on creating high-quality & innovative digital solutions."],
        loop: false,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <section id="home" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {text}
                    <Cursor />
                </h1>
                <p className={styles.description}>
                    {description}
                    <Cursor />
                </p>
                <div className={styles.btnContainer}>
                    <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a href="/assets/resume/NANCY-TYAGI-RESUME.pdf" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">
                        View Resume
                    </a>
                    <a href="/assets/resume/NANCY-TYAGI-RESUME.pdf" download="NANCY_TYAGI_RESUME.pdf" className={styles.downloadLink}>
                       <img src="/assets/icons/download.png" alt="Download Resume" className={styles.downloadIcon}/>
                    </a>
                    <a href="#contact" className={styles.secondaryBtn}>
                        Available for Opportunities
                    </a>
                </div>
            </div>
            <div className={styles.heroImgContainer}>
                <img
                    src="/assets/hero/nancy.jpeg"
                    alt="Professional photo of Nancy Tyagi"
                    className={styles.heroImg}
                />
            </div>

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};