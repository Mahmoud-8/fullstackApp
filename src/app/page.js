import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.textContainer}>


        <h1 className={styles.title}> Werde ein GrammatikProfi! </h1>
        <p className={styles.desc}>Ich bin ,

Deutschlehrerin und Gründerin von DeutschLera. Vor 7,5 Jahren, im Jahr 2016, kam ich nach Deutschland und erlernte als Erwachsene die deutsche Sprache.

Seitdem habe ich Hunderttausenden von Menschen auf YouTube, Instagram und in Privat- sowie Gruppenkursen geholfen, Deutsch zu lernen... und das, was ich beschreibe, basiert auf meinen eigenen Erfahrungen und denen meiner Schüler:

Ich erinnere mich noch gut daran, wie herausfordernd es war, Deutsch zu sprechen und ständig die Angst vor Fehlern zu haben... wie schwer es war, mit Muttersprachlern in Kontakt zu treten.

Jetzt, 7 Jahre und hunderttausende von Schülern später, weiß ich, dass es einen Ausweg gibt.

Du musst nicht länger mit der deutschen Grammatik kämpfen. Wenn du meine Hilfe annimmst, werden wir gemeinsam die anspruchsvollen Themen der deutschen Grammatik meistern!</p>


        <div className={styles.buttons}>
        <button className={styles.button}>Book a lesson</button>
          <button className={styles.button}>Contact Me</button>
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