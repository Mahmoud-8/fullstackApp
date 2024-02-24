import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Me</h2>
                <h1 className={styles.title}>
                alias eligendi! Est accusamus vel amet? Aliquam, dolorum eveniet.                </h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugit sed voluptates, ex fugiat quidem repellendus nemo odit laborum necessitatibus omnis, alias eligendi! Est accusamus vel amet? Aliquam, dolorum eveniet. </p>
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