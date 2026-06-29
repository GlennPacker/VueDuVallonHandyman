import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";
import Reviews from "@/components/reviews/Reviews";
import { Gallery } from "@/components/gallery/Gallery";

const beforeAndAfters = [].map(i => (
  [
    {
      src: `/tiling/${i}.jpg`,
      alt: 'Tiling'
    },
  ]
))

export default function PropertyServices() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={`${styles.contentLayout} mx-auto`}>
          <div className={styles.layout}>
            <div>
              <h1>Tiling Services</h1>

              <p>
                Whether you're updating a bathroom, refreshing a kitchen, or laying a new tiled floor, Vue Du Vallon Handyman provides a professional tiling service with a high-quality finish. From replacing a few damaged tiles to completing a full room, I take pride in delivering neat, accurate workmanship that will stand the test of time.
              </p>
            </div>
            <div>
              <h3>
                Professional Tiling Services
              </h3>
              <p>
                Tiles are a practical, durable, and stylish choice for many areas of the home. Correct preparation and installation are essential to achieving a long-lasting finish, and I take care to ensure every project is completed to a high standard.
              </p>
              <p>I offer tiling services for:</p>
              <ul>
                <li>
                  Bathrooms and shower areas
                </li>
                <li>
                  Kitchen splashbacks
                </li>
                <li>
                  Kitchen and utility room floors
                </li>
                <li>
                  Hallways and entrances
                </li>
                <li>
                  Conservatories
                </li>
                <li>
                  Feature walls
                </li>
                <li>
                  Small repairs and replacement of damaged tiles
                </li>
              </ul>


              <h3>Why Choose Vue Du Vallon Handyman?</h3>
              <ul>
                <li>
                  Careful preparation for a durable finish
                </li>
                <li>
                  Accurate tile cutting and fitting
                </li>
                <li>
                  Neat, consistent grout lines
                </li>
                <li>
                  Reliable and friendly service
                </li>
                <li>
                  Suitable for small and medium-sized tiling projects
                </li>
                <li>
                  Competitive and transparent pricing
                </li>
              </ul>
              <p>
                Every job is completed with attention to detail, ensuring the finished result looks great and performs well for years to come.
              </p>

              <h2>My Tiling Process</h2>
              <ol>
                <li>
                  <strong>Consultation and Assessment</strong>
                  <p>I discuss your project, inspect the area, and provide advice on tile layout, materials, and finishes.</p>
                </li>

                <li>
                  <strong>Tile Installation</strong>
                  <p>Tiles are carefully measured, cut, and laid using quality adhesives to achieve a precise, even finish.</p>
                </li>

                <li>
                  <strong>Grouting and Finishing</strong>
                  <p>Once the adhesive has cured, grout is applied, joints are finished neatly, and the tiled surface is cleaned.</p>
                </li>

                <li>
                  <strong>Final Inspection</strong>
                  <p>I check that every tile is securely fitted and the finished work meets a high standard before leaving the area clean and tidy.</p>
                </li>
              </ol>
            </div>
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

        <Reviews filter="tiling" />
      </div>
    </main >
  );
}
