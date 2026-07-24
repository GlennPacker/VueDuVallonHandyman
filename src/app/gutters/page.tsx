import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";
import Reviews from "@/components/reviews/Reviews";

const beforeAndAfters = [1, 5, 3, 4, 2, 6, 7].map(i => (
  [
    {
      src: `/gutters/${i} before.jpg`,
      alt: 'gutters before'
    },
    {
      src: `/gutters/${i} after.jpg`,
      alt: 'gutters after'
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
              <h1>Gutter Installation, Repairs & Cleaning</h1>
              <h2>Reliable Gutter Services Across Haute-Vienne, Creuse & Indre</h2>
              <p>
                A well-maintained guttering system allows rainwater to drain away efficiently, helping to prevent overflowing gutters, damp patches, staining and unnecessary wear to your property. Whether you need new guttering installed, damaged sections repaired or blocked gutters cleared, we provide dependable gutter services throughout Haute-Vienne, Creuse and Indre.
              </p>
            </div>
            <h2>Gutter Installation</h2>
            <p>
              Whether you're replacing worn or damaged guttering or fitting a new system to an extension, garage, workshop or outbuilding, we install traditional zinc guttering as well as modern PVC (plastic) guttering, offering practical solutions to suit both period properties and contemporary homes.
            </p>
            <p>Our gutter installation services include:</p>
            <ul>
              <li>Complete gutter replacement</li>
              <li>New guttering for extensions and outbuildings</li>
              <li>Downpipe installation and replacement</li>
              <li>Replacement brackets and fittings</li>
              <li>Fascia and soffit gutter installation</li>
            </ul>

            <h2>Gutter Repairs</h2>
            <p>
              Damaged guttering can quickly lead to leaks and overflowing rainwater if left unattended. We carry out a wide range of repairs to restore your guttering and keep it working efficiently.
            </p>
            <p>We regularly repair:</p>
            <ul>
              <li>Leaking joints</li>
              <li>Loose or sagging gutters</li>
              <li>Blocked or damaged downpipes</li>
              <li>Broken brackets and fixings</li>
              <li>Fascia and soffit repairs associated with guttering</li>
            </ul>

            <h2>Gutter Cleaning</h2>
            <p>
              Leaves, moss and other debris can build up over time, preventing rainwater from flowing freely through your guttering. Our gutter cleaning service removes blockages and helps keep your drainage system working properly.
            </p>
            <p>Our cleaning service includes:</p>
            <ul>
              <li>Removal of leaves, moss and debris</li>
              <li>Clearing blocked gutters and downpipes</li>
              <li>Visual inspection for damage or leaks</li>
              <li>Minor adjustments where required</li>
              <li>Advice on any repairs that may be needed</li>
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
