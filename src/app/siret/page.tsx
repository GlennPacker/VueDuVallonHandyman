import styles from "./page.module.css";

export default function Siret() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Siret
        </h1>

        <img
          src="/siret.jpg"
          alt="Vue Du Vallon Handyman"
          className={styles.siretImage}
        />
      </div>
    </main >
  );
}