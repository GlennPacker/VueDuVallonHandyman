import styles from "./page.module.css";

const services = [{
  href: 'gardening',
  src: `\\gardening\\garden 2.jpg`,
  alt: 'gardening',
  title: 'Gardening'
}, {
  href: 'strimming',
  src: `\\strimming\\strimming category.jpg`,
  alt: 'strimming',
  title: 'Strimming'
}, {
  href: 'repointing',
  src: `\\repointing\\repointing category.jpg`,
  alt: 'repointing',
  title: 'Repointing'
}, {
  href: 'pressure-wash',
  src: `\\pressure-wash\\pressure wash category.jpg`,
  alt: 'pressure wash',
  title: 'Pressure Wash'
}, {
  href: '',
  src: `\\painting\\painting.jpg`,
  alt: 'painting',
  title: 'Painting'
}];

export default function Services() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={styles.layout}>
          <h1>Services</h1>
          <div>
            While it is not possible to list everything we do here are some of the more common requests:
          </div>
          <div className={styles.serviceGrid}>
            {
              services.map(({ href, src, alt, title }) => {
                return href ?
                  (
                    <a
                      key={title}
                      className={styles.cta}
                      href={`/${href}`}
                    >
                      <img
                        src={src}
                        alt={alt}
                        width="230px;"
                        height="240px"
                      />
                      <div>
                        <h3>{title}</h3>
                      </div>
                    </a>
                  )
                  :
                  <div
                    className={styles.cta}
                    key={title}
                  >
                    <img
                      src={src}
                      alt={alt}
                      width="230px;"
                      height="240px"
                    />
                    <div>
                      <h3>{title}</h3>
                    </div>
                  </div>
              })
            }
          </div>
        </div>

      </div>
    </main >
  );
}
