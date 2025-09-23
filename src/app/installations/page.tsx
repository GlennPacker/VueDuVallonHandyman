import styles from "./page.module.css";
import Reviews from "@/components/reviews/Reviews";

export default function Gardening() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div className={styles.layout}>
          <div className={styles.contentLayout}>
            <div >
              <h1>Kit Installation Services</h1>
              <h3>Reliable handyman kit assembly projects</h3>

              <p>Flat-pack and DIY kits are convenient, but putting them together can be time-consuming, frustrating, and sometimes tricky without the right tools. We provide professional kit installation services to make sure your furniture, equipment, and home projects are assembled safely and correctly - saving you stress and hassle.</p>
              <p>Our goal is to make the installation process simple and stress-free. With careful attention to detail and the right tools for the job, we ensure every project is completed to a high standard, whether it's inside your home or outside in the garden.</p>

              <h2>What We Install</h2>
              <p>We handle a wide range of kit installations, including:</p>

              <h3>Indoor items:</h3>
              <ul>
                <li>Flat-pack furniture (wardrobes, beds, cabinets, shelving)</li>
                <li>Kitchen and bathroom units</li>
                <li>Exercise equipment, desks, and office furniture</li>
              </ul>


              <h3>Outdoor items:</h3>
              <ul>
                <li>Garden sheds and storage boxes</li>
                <li>Playhouses</li>
                <li>Pergolas</li>
                <li>Gazebos</li>
                <li>Porches</li>
                <li>Pools</li>
                <li>Greenhouses</li>
                <li>Garden furniture</li>
              </ul>


              <h2>Why Choose Our Kit Assembly Services?</h2>
              <ul>
                <li><strong>Reliable workmanship</strong> - Careful, precise installation that lasts</li>
                <li><strong>No stress</strong> - We bring the right tools and handle tricky instructions</li>
                <li><strong>Save time</strong> - Fast, efficient service so you can enjoy your new item sooner</li>
                <li><strong>Personal service</strong> - You deal directly with us from start to finish</li>
              </ul>


              <h2>Let's Get It Built</h2>
              <p>Don't spend your weekend wrestling with instructions and missing screws. Let us take care of it and ensure your new kit is properly installed, safe, and ready to use.</p>


            </div>
            <img
              src={`/installations/installations.jpg`}
              alt={`Vue Du Vallon Handyman - installations`}
              className={styles.gardeningImage}
              width="230px;"
            />
          </div>
          <Reviews filter="gardening" />
        </div>
      </div>
    </main >
  );
}
