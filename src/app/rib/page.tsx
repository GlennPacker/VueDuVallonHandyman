import styles from "./page.module.css";

export default function Siret() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Rib
        </h1>
        <div className={styles.ribGrid}>
          <div className={styles.ribLabel}>IBAN:</div>
          <div>FR59 1744 8000 01PO MD2Q 8HLU 428</div>
          <div className={styles.ribLabel}>BIC:</div>
          <div>SFPEFRP2</div>
          <div className={styles.ribLabel}>Account Name:</div>
          <div>SUSAN PACKER</div>
        </div>

        <img
          src="/rib.png"
          alt="Glenn The Handyman"
          className={styles.siretImage}
        />
        <a href="/rib.pdf" download>Download</a>
      </div>
    </main >
  );
}