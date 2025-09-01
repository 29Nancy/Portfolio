import React, { useState } from "react";
import styles from "./Contact.module.css";
import Confetti from "react-confetti";

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // This is the new handleSubmit function that sends data without redirecting
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        
        try {
            const response = await fetch("https://formspree.io/f/mqadkkzy", {
                method: "POST",
                body: data,
                headers: {
                    "Accept": "application/json"
                }
            });
            
            if (response.ok) {
                setIsSubmitted(true);
                form.reset(); // This clears the form fields after submission
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <section className={styles.container} id="contact">
            {isSubmitted && <Confetti />}
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.contentBox}>
                <div className={styles.subheading}>
                    <h3>Get in Touch</h3>
                    <p>Let's discuss opportunities, collaboration, or just connect!</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.formContainer}>
                        {isSubmitted ? (
                            <p className={styles.thanksMessage}>Thanks for reaching out!</p>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.contactForm}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="fullName">Full Name*</label>
                                    <input type="text" id="fullName" name="fullName" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message*</label>
                                    <textarea id="message" name="message" required />
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                    <div className={styles.contactInfo}>
                        <h4>Contact Info</h4>
                        <div className={styles.infoGroup}>
                            <img src="/assets/icons/mail.jpg" alt="Email Icon" />
                            <p>nancytyagi291104@gmail.com</p>
                        </div>
                        
                        <h4 className={styles.socialMediaTitle}>Social Media</h4>
                        <div className={styles.socialMediaLinks}>
                            <a href="https://linkedin.com/in/nancy-tyagi29" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/linkedin.jpg" alt="LinkedIn" className={styles.socialIcon} />
                            </a>
                            <a href="https://github.com/29Nancy" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/github.jpg" alt="GitHub" className={styles.socialIcon} />
                            </a>
                            <a href="https://leetcode.com/user/your-username/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/icons/leetcode.png" alt="LeetCode" className={styles.socialIcon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};