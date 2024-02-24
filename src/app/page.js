import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.textContainer}>


        <h1 className={styles.title}> alias eligendi! Est accusamus vel amet? Aliquam, dolorum eveniet. </h1>
        <p className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugit sed voluptates, ex fugiat quidem repellendus nemo odit laborum necessitatibus omnis, alias eligendi! Est accusamus vel amet? Aliquam, dolorum eveniet. </p>


        <div className={styles.buttons}>
        <button className={styles.button}>Test</button>
          <button className={styles.button}>Contact Us</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt= "" fill className={styles.brandImg} />

        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt= "" fill className={styles.heroImg} />
       </div>

    </div>
   );
}
 
export default Home;