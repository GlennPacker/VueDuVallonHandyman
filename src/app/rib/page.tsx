import styles from "./page.module.css";

export default function Siret() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Rib
        </h1>
        <p><b>This bank does not accept instant transfers.</b></p>

        <img
          src="/rib.png"
          alt="Vue Du Vallon Handyman"
          className={styles.siretImage}
        />
        <a href="/rib.pdf" download>Download</a>
      </div>
    </main >
  );
}