import VideoComponent from "@/components/videoComponent/VideoComponent";
import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";
import Reviews from "@/components/reviews/Reviews";

const beforeAndAfters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
  [
    {
      src: `/pressure-wash/${i} before.jpg`,
      alt: 'before pressure washing'
    },
    {
      src: `/pressure-wash/${i} after.jpg`,
      alt: 'after pressure washing'
    }
  ]
))

export default function PropertyServices() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={`${styles.contentLayout} mx-auto`}>

          <div className={styles.layout}>
            <div className={styles.videoParaLayout}>

              <div>
                <h1>Pressure Washing</h1>
                <h3>
                  Pressure washing for patios, paths, driveways and exterior surfaces across Haute-Vienne, Creuse & Indre
                </h3>
                <p>
                  Over time, patios, paths, driveways and other outdoor surfaces can become dirty and discoloured through weather, moss, algae and general use. Pressure washing is an effective way to remove built-up dirt and bring these surfaces back to a cleaner condition.
                </p>
                <p>
                  I offer pressure washing for a range of outdoor surfaces around your home, helping to keep patios, terraces, paths and driveways clean and tidy.
                </p>
              </div>
              <div className={styles.videoContainer}>
                <VideoComponent
                  width="400px"
                  height="300px"
                  video="1vIq5HHKbLw"
                />
              </div>
            </div>

            <h3>
              Pressure Washing Services
            </h3>
            <p>
              I can pressure wash a variety of outdoor areas, including:
              <ul>
                <li>
                  <strong>Patios and terraces: </strong>
                  Removing built-up dirt, moss and algae from paved and stone surfaces.</li>
                <li>
                  <strong>Driveways and paths: </strong>
                  Cleaning concrete, paving and other suitable hard surfaces.
                </li>
                <li>
                  <strong>Garden walls and steps: </strong>
                  Removing dirt and surface build-up where appropriate.
                </li>
                <li>
                  <strong>Exterior surfaces: </strong>
                  Cleaning suitable outdoor areas around your property.
                </li>
              </ul>
            </p>
            <h3>A Practical Approach</h3>
            <p>
              Different surfaces require different approaches. I assess the area before starting and adjust the pressure and cleaning method to suit the material. This helps avoid unnecessary damage to paving, pointing and other surfaces.
            </p>
            <p>
              I work carefully and aim to leave the area clean and tidy when the job is finished.
            </p>
            <h3>Second Homes and Holiday Properties</h3>
            <p>
              If you own a property in France but don't live here all year, I can arrange to carry out pressure washing while you're away. I can keep you updated on progress and provide photographs of the completed work.
            </p>
            <h3>Areas Covered</h3>
            <p>I provide pressure washing services across Haute-Vienne, Creuse and Indre.</p>
            <p>If you have a patio, driveway, paths or other outdoor areas that need cleaning, get in touch to discuss the work and arrange a quote.</p>
          </div>

          <div className={styles.beforeAndAfterGrid}>
            {
              beforeAndAfters.map(([before, after], index) =>
                <div
                  key={`before-and-after-${index}`}
                  className={styles.beforeAndAfter} >
                  <BeforeAndAfter
                    before={before}
                    after={after}
                    size={{
                      width: 200,
                      height: 200
                    }}
                  />
                </div>
              )
            }
          </div>
        </div>
        <Reviews filter="powerWashing" />
      </div>
    </main >
  );
}
