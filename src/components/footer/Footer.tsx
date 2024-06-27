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
          {/* <img
            src="/youtube.png"
            alt="link to facebook"
            height="25px"
          /> */}
        </div>

        <div className="text-right">
          <a href="/siret" className={styles.a} >
            <strong>Siret:</strong> 98510895000017
          </a>
        </div>
      </div>
    </div>
  )
}
