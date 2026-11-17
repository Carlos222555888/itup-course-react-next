import styles from "./page.module.css";

export default function Home() {
  // write a short landing/introduction section for the Home page
  // Make sure each page returns unique, meaningful content - this is what proves the routing
  // is working
  return (
    <section className={styles.landing}>
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my projects, skills, and experience in web development.</p>
    </section>
  );
}
