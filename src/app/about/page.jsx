import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
    return ( 
        <div>
            <div className={styles.imgContainer}>
                <Image src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill/>

            </div>
        </div>
     );
}
 
export default AboutPage;