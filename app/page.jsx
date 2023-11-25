import styles from './page.module.css';
import HomePage from '@/Components/Home/HomePage';
import Script from 'next/script';
import About from '@/Components/About/About';
import Contact from '@/Components/Contact/Contact';
import FeaturedProjects from '@/Components/Projects/FeaturedProjects';
import Experience from '@/Components/Experience/Experience';
export default function Home() {
  const GA_MEASUREMENT_ID = process.env.Next_Measurement_Id;


  return (
    <main>
      <div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y26H3HW1BM" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VDW1B4MTPW');
        `}
        </Script>
        <div className={styles.container}>
          <HomePage />
          <hr />

        </div>
        <div id="about" className={styles.container}>
          <About />
          <hr />

        </div>
        <div id="projects" className={styles.container}>
          <FeaturedProjects />
          <hr />

        </div>
        <div id="experience" className={styles.container}>
          <Experience />
          <hr />
        </div>
        <div id="contact" className={styles.container}>
          <Contact />
        </div>
      </div>
    </main>
  );
}
