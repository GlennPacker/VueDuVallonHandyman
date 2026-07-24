import styles from "./page.module.css";

const services = [{
  href: 'gardening',
  src: `/gardening/garden 2.jpg`,
  alt: 'gardening',
  title: 'Gardening'
}, {
  href: '',
  src: `/gates/gates category.jpg`,
  alt: 'custom made gates',
  title: 'Gates'
}, {
  href: 'gutters',
  src: `/gutters/gutters category.jpg`,
  alt: 'gutter cleaning and repairs',
  title: 'Gutters'
}, {
  href: 'installations',
  src: `/installations/pool.jpg`,
  alt: 'kit and flatpack installations',
  title: 'Installations'
}, {
  href: 'painting',
  src: `/painting/painting.jpg`,
  alt: 'painting',
  title: 'Painting'
}, {
  href: 'pressure-wash',
  src: `/pressure-wash/pressure wash category.jpg`,
  alt: 'pressure wash',
  title: 'Pressure Wash'
}, {
  href: '',
  src: `/repairs/repairs.jpg`,
  alt: 'repairs',
  title: 'Repairs'
}, {
  href: 'repointing',
  src: `/repointing/repointing category.jpg`,
  alt: 'repointing',
  title: 'Repointing'
}, {
  href: 'strimming',
  src: `/strimming/strimming category.jpg`,
  alt: 'strimming',
  title: 'Strimming'
}, {
  href: '',
  src: `/studwalls/studwall.jpg`,
  alt: 'stud walls',
  title: 'Stud walls'
}, {
  href: 'tiling',
  src: `/tiling/tiling.jpg`,
  alt: 'tiling',
  title: 'Tiling'
}, {
  href: '',
  src: `/dechetterie/déchèterie.jpg`,
  alt: 'Déchèterie',
  title: 'Tip Runs'
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

          <div className={styles.paddingtop}>
            Not all services are available in France due to the French Rules.
          </div>
        </div>

      </div>
    </main >
  );
}
