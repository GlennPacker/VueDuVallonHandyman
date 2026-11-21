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
},
{
  href: 'repointing',
  src: `/repointing/repointing category.jpg`,
  alt: 'repointing',
  title: 'Repointing'
},
{
  href: 'installations',
  src: `/installations/pool.jpg`,
  alt: 'kit and flatpack installations',
  title: 'Installations'
},
{
  href: 'pressure-wash',
  src: `/pressure-wash/pressure wash category.jpg`,
  alt: 'pressure wash',
  title: 'Pressure Wash'
}, {
  href: '',
  src: `/repairs/repairs.jpg`,
  alt: 'repairs',
  title: 'Repairs'
},
{
  href: 'strimming',
  src: `/strimming/strimming category.jpg`,
  alt: 'strimming',
  title: 'Strimming'
}, {
  href: '',
  src: `/studwalls/studwall.jpg`,
  alt: 'stud walls',
  title: 'Stud walls'
},
{
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
          <h1>More Handyman Services</h1>
          <h3>A range of practical home improvement, repair and maintenance services across Haute-Vienne, Creuse & Indre</h3>

          <div>
            <p>
              I undertake a wide range of work around the home and garden, from general repairs and maintenance to installations, renovations and larger improvement projects.
            </p>
            <p>
              Whether you have something that needs repairing, installing or improving, I can help with a variety of projects, from smaller jobs to more involved work.
            </p>
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
                        {title}
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
                      {title}
                    </div>
                  </div>
              })
            }
          </div>

          <div className={styles.caption}>
            Not all services are available in France due to the French Rules.
          </div>

          <div>
            <h3>Additional Services</h3>
            <h4>Kit Assembly and Installation</h4>
            <p>
              Assembly and installation of supplied kits for the home and garden, including sheds, summerhouses, gazebos, pergolas, porches and swimming pools. I can help with putting the components together and getting everything installed correctly.
            </p>
            <h4>Repointing and Stonework</h4>
            <p>
              Repairing and replacing worn or damaged mortar in stone walls, along with general masonry repairs and patching. I work on traditional stone properties using appropriate materials and techniques to suit the building.
            </p>
            <h4>General Repairs and Home Improvements</h4>
            <p>
              From fixing damaged items and replacing fittings to tackling those jobs that have been waiting to get done, I undertake a variety of general repairs and improvements around the home.
            </p>
            <h4>Painting and Decorating</h4>
            <p>
              Interior painting of walls, ceilings and woodwork, including preparation, filling, sanding and painting. Whether you're refreshing a room or decorating a larger area, I can help with the work from preparation through to completion.
            </p>
            <h4>Gutter Cleaning</h4>
            <p>
              Cleaning gutters and removing accumulated leaves, moss and other debris. Keeping gutters clear helps rainwater drain away properly and reduces the risk of blockages and overflowing.
            </p>
            <h4>Plasterboarding and Suspended Ceilings</h4>
            <p>
              Plasterboard installation for walls and ceilings, including suspended ceiling systems. Suitable for renovations, room improvements and converting existing spaces.
            </p>

            <h4>
              Gutters
            </h4>
            <p>
              From general maintenance to dealing with problems with gutters and drainage, I can help keep your guttering in good working order.
            </p>
          </div>
        </div>
      </div>
    </main >
  );
}
