import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";
import Reviews from "@/components/reviews/Reviews";

const beforeAndAfters = [1, 2].map(i => (
  [
    {
      src: `/gutters/${i} before.jpg`,
      alt: 'before gutter cleaning'
    },
    {
      src: `/gutters/${i} after.jpg`,
      alt: 'after gutter cleaning'
    }
  ]
))
export default function Gutters() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={`${styles.contentLayout} mx-auto`}>
          <div className={styles.layout}>
            <div>
              <h1>Gutter and Roof Cleaning by Vue Du Vallon Handyman</h1>
              <h3>Affordable, reliable gutter services for homes across Haute-Vienne &amp; Creuse</h3>
              <p>
                At Vue Du Vallon Handyman, I provide reliable and thorough gutter cleaning, minor gutter repairs,
                and roof cleaning services to help protect your home from costly damage. I offer a personal, dependable service
                with attention to detail on every job. Keeping your roof and gutters in good condition is essential for preventing
                water damage, damp issues, and structural problems — and I'm here to make sure your property stays protected.
              </p>
            </div>
            <h2>Why Gutter Cleaning and Repairs Are Important</h2>
            <p>
              Gutters are designed to channel rainwater safely away from your property. When they become blocked with leaves, moss, and debris, or when joints start to fail, water can overflow and cause:
            </p>
            <ul>
              <li>Damp walls and internal moisture problems</li>
              <li>Damage to fascias</li>
              <li>Leaking joints and sagging sections</li>
              <li>Foundation issues caused by poor drainage</li>
            </ul>
            Regular cleaning combined with minor repairs ensures your guttering system works efficiently all year round.
            <h2>Minor Gutter Repairs</h2>
            <p>
              In addition to cleaning, I carry out small but essential gutter repairs, including:            </p>
            <ul>
              <li>Re-securing loose brackets</li>
              <li>Repairing or resealing leaking joints</li>
              <li>Realigning sagging sections</li>
              <li>Clearing and repairing blocked downpipes</li>
              <li>Replacing damaged sections of guttering</li>
            </ul>
            Addressing minor issues early helps prevent larger, more expensive problems later.

            <h2>Professional Roof Cleaning</h2>
            Over time, roofs can accumulate moss, algae, lichen, and general debris. If left untreated, this build-up can:
            <ul>
              <li>Trap moisture against roof tiles</li>
              <li>Lead to cracked or displaced tiles</li>
              <li>Block gutters and downpipes</li>
              <li>Shorten the lifespan of your roof</li>
            </ul>
          </div>

          <div className={styles.beforeAndAfterGrid}>
            {beforeAndAfters.map(([before, after], index) => (
              <div key={`before-and-after-${index}`} className={styles.beforeAndAfter}>
                <BeforeAndAfter
                  before={before}
                  after={after}
                  size={{ width: 200, height: 200 }}
                />
              </div>
            ))}
          </div>

        </div>
        <Reviews filter="gutters" />
      </div>
    </main>
  );
}
