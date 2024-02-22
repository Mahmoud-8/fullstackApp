import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Me</h2>
                <h1 className={styles.title}>
                    I am a German teacher and an aspiring web developer
                </h1>
                <p className={styles.desc}>
                    I am a German teacher and an aspiring web developer with over three years of experience in teaching English as a foreign language to adult, adolescent, and young learners. I have a passion for teaching and learning, and I am always looking for ways to improve my skills and knowledge.</p>
                <div className={styles.boxes}>

                    <div className={styles.box}>
                        <h1>7.5 K+</h1>
                        <p>years of experience</p>
                        </div>
                        <div className={styles.box}>
                        <h1>7.5 K+</h1>
                        <p>years of experience</p>
                        </div>
                        <div className={styles.box}>
                        <h1>7.5 K+</h1>
                        <p>years of experience</p>
                        </div>

                        </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={styles.img} />
            </div>
        </div>
    );
}

export default AboutPage;