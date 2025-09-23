import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";
import Reviews from "@/components/reviews/Reviews";

// const beforeAndAfters = [
//   [
//     { src: '/pressure-wash/1 before.jpg', alt: 'exterior wall before pressure wash' },
//     { src: '/pressure-wash/1 after.jpg', alt: 'exterior wall after pressure wash' }
//   ],
//   [
//     { src: '/pressure wash 1 before.jpg', alt: 'before pressure wash' },
//     { src: '/pressure wash 1 after.jpg', alt: 'after pressure wash' }
//   ],
//   [
//     { src: '/outside barn before.jpg', alt: 'outside barn before pressure wash' },
//     { src: '/outside barn after.jpg', alt: 'outside barn after pressure wash' }
//   ],
//   [
//     { src: '/wall before.jpg', alt: 'wall before pressure wash' },
//     { src: '/wall after.jpg', alt: 'wall after pressure wash' }
//   ],
//   [
//     { src: '/path before.jpg', alt: 'path before pressure wash' },
//     { src: '/path after.jpg', alt: 'path after pressure wash' }
//   ],
//   [
//     { src: '/courtyard before.jpg', alt: 'courtyard before pressure wash' },
//     { src: '/courtyard after.jpg', alt: 'courtyard after pressure wash' }
//   ],
//   [
//     { src: '/stairs before.jpg', alt: 'stairs before pressure wash' },
//     { src: '/stairs after.jpg', alt: 'stairs after pressure wash' }
//   ],
//   [
//     { src: '/patio before.jpg', alt: 'patio before pressure wash' },
//     { src: '/patio after.jpg', alt: 'patio after pressure wash' }
//   ],
//   [
//     { src: '/trub before.jpg', alt: 'exterior wall before pressure wash' },
//     { src: '/trub after.jpg', alt: 'exterior wall after pressure wash' }
//   ],
// ];

export default function PropertyServices() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={`${styles.contentLayout} mx-auto`}>
          <div className={styles.layout}>
            <div>
              <h1>Handyman Painting Services</h1>
              <h3>Affordable, reliable painting for homes across Haute-Vienne &amp; Creuse</h3>
              <p>
                A fresh coat of paint can transform your space, and I make the process simple, affordable, and stress-free. Whether you need a single room refreshed, touch-ups around the house, or your home’s exterior brightened up, I provide professional-quality results with the personal touch of a local handyman.
              </p>
            </div>
            <h2>Interior Painting</h2>
            <p>
              Transform your living space with smooth, even finishes that make your home feel brand new. I take care of all the prep work, painting, and cleanup so you can relax and enjoy the results.
            </p>
            <ul>
              <li>Walls, ceilings, and doors</li>
              <li>Trim, baseboards, and molding</li>
              <li>Accent walls &amp; touch-ups</li>
              <li>Minor drywall repair and priming before painting</li>
            </ul>
            <h2>Exterior Painting</h2>
            <p>
              Boost your curb appeal and protect your property with durable, weather-resistant finishes.
            </p>
            <ul>
              <li>Shutters, trim, and entry doors</li>
              <li>Decks, fences, and railings</li>
              <li>Touch-ups and full repaints</li>
            </ul>
            <h2>Why Homeowners Choose My Painting Services</h2>
            <ul>
              <li><strong>Local and dependable</strong> - I serve homeowners across both departments</li>
              <li><strong>Professional results</strong> - Careful prep and long-lasting finishes</li>
              <li><strong>Affordable pricing</strong> - Quality without contractor-level costs</li>
              <li><strong>Personal service</strong> - You deal directly with me, from start to finish</li>
            </ul>
            <h2>Let's Get Started</h2>
            <p>
              Ready to refresh your home with a new coat of paint? Get in touch today for a free estimate and let's make your project a success.
            </p>
          </div>
          {/*
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
          */}
        </div>
        <Reviews filter="painting" />
      </div>
    </main>
  );
}
