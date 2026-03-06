import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={`${styles.footer} mx-auto`}>
        <div>
          <strong>Phone:</strong> +33 7 70 26 20 89 <br />
          <strong>Email:</strong> Glenn@VueDuVallon.fr
        </div>

        <div>
          <a
            href="https://www.facebook.com/profile.php?id=61557315565267"
            target="_blank"
          >
            <img
              src="/facebook.png"
              alt="link to facebook"
              height="25px"
            />
          </a>
        </div>

        <div>
          <a
            href="https://www.instagram.com/glennthehandyman/"
            target="_blank"
          >
            <img
              className={styles.insta}
              src="/Insta.png"
              alt="link to Instagram"
              height="35px"
            />
          </a>
        </div>

        <div className="text-right">
          <a href="/siret" className={styles.a} >
            <strong>Siret:</strong> 101383834
          </a>
          <br />
          <a href="/rib" className={styles.a} >
            <strong>Rib</strong>
          </a>
        </div>
      </div>
    </div>
  )
}
