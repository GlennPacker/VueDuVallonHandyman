import VideoComponent from "@/components/videoComponent/VideoComponent";
import styles from "./page.module.css";
import { BeforeAndAfter } from "@/components/beforeAndAfter/BeforeAndAfter";

const beforeAndAfters = [
  [
    {
      src: '/pressure wash 1 before.jpg',
      alt: 'before pressure wash'
    },
    {
      src: '/pressure wash 1 after.jpg',
      alt: 'after pressure wash'
    }
  ],
  [{
    src: '/outside barn before.jpg',
    alt: 'outside barn before pressure wash'
  },
  {
    src: '/outside barn after.jpg',
    alt: 'outside barn after pressure wash'
  }],
  [{
    src: '/wall before.jpg',
    alt: 'wall before pressure wash'
  }, {
    src: '/wall after.jpg',
    alt: 'wall after pressure wash'
  }],
  [{
    src: '/path before.jpg',
    alt: 'path before pressure wash'
  }, {
    src: '/path after.jpg',
    alt: 'path after pressure wash'
  }],
  [{
    src: '/courtyard before.jpg',
    alt: 'courtyard before pressure wash'
  },
  {
    src: '/courtyard after.jpg',
    alt: 'courtyard after pressure wash'
  }],
  [{
    src: '/stairs before.jpg',
    alt: 'stairs before pressure wash'
  },
  {
    src: '/stairs after.jpg',
    alt: 'stairs after pressure wash'
  }],
  [{
    src: '/patio before.jpg',
    alt: 'patio before pressure wash'
  }, {
    src: '/patio after.jpg',
    alt: 'patio after pressure wash'
  }],
  [{
    src: '/trub before.jpg',
    alt: 'exterior wall before pressure wash'
  }, {
    src: '/trub after.jpg',
    alt: 'exterior wall after pressure wash'
  }],
];

export default function PropertyServices() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>

        <div className={styles.layout}>
          <div className={styles.videoParaLayout}>

            <div>
              <h1>Pressure Washing</h1>
              <h3>
                The Power of Pressure Washing with Vue Du Vallon Handyman
              </h3>
              <p>
                In the quest to maintain the beauty and integrity of our homes and outdoor spaces, few tools wield as much transformative power as the pressure washer. At Vue Du Vallon Handyman, we understand the profound impact that a thorough pressure washing can have on the appearance and longevity of your property. From revitalizing weathered exteriors to banishing stubborn stains, our pressure washing services are designed to breathe new life into your surroundings, leaving them sparkling clean and rejuvenated.
              </p>
            </div>
            <div className={styles.videoContainer}>
              <VideoComponent
                width="400px"
                height="300px"
                video="1vIq5HHKbLw"
                playlist="1vIq5HHKbLw" // {['1vIq5HHKbLw', 'NbX4QwvFBUo']}
              />
            </div>
          </div>

          <h3>
            Unleashing the Power of Clean
          </h3>
          <p>
            Over time, dirt, grime, mold, and mildew can accumulate on the surfaces of your home, deck, driveway, and patio, detracting from their appearance and compromising their structural integrity. Traditional cleaning methods often fall short when it comes to tackling tough stains and embedded debris. That's where pressure washing comes in.
          </p>
          <p>
            Using industrial high-pressure water jets we can blast away even the most stubborn dirt and grime, restoring surfaces to their original beauty. Whether it's removing algae from your siding, erasing oil stains from your driveway, or rejuvenating your deck for the upcoming season, our pressure washing services deliver unparalleled results, leaving your property looking cleaner and more vibrant than ever before.
          </p>

          <h3>A Convenient Solution for Busy Lifestyles</h3>
          <p>
            In today's fast-paced world, finding the time and energy to tackle outdoor cleaning projects can be a challenge. That's where Vue Du Vallon Handyman comes in. Our pressure washing services are designed to take the hassle out of exterior maintenance, allowing you to enjoy a clean and pristine home without lifting a finger.
          </p>
          <p>
            With flexible scheduling options and efficient service delivery, we make it easy to fit pressure washing into your busy lifestyle. Whether you need a one-time deep clean or regular maintenance to keep your property looking its best year-round, our team is here to help. Sit back, relax, and let Vue Du Vallon Handyman handle the dirty work for you.
          </p>

          <h3>Experience the Vue Du Vallon Difference</h3>
          <p>
            At Vue Du Vallon Handyman, we believe that every home deserves to shine. With our comprehensive pressure washing services, we can help you achieve a cleaner, brighter, and more welcoming environment for you and your family to enjoy. Contact us today to learn more about our pressure washing offerings and discover the transformative power of clean.
          </p>
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
    </main >
  );
}
