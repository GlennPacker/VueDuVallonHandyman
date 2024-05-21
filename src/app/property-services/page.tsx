import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <div>
          <h1>
            Welcome to Vue Du Vallon Handyman Property Services
          </h1>
          <div>
            At Vue Du Vallon Handyman, we understand the importance of maintaining your property to keep it looking its best. Our comprehensive property services are designed to address all your maintenance and repair needs, ensuring that your home remains in top condition year-round. Whether you need help with small repairs, seasonal maintenance, or larger renovation projects, our skilled handyman is here to help.
          </div>
          <h3 className="pt-3">
            Our Services
          </h3>
          <div>
            We offer a wide range of property services to meet your needs, including:
          </div>
          <ul>
            <li>
              <strong>Gardening </strong>
              Transform your outdoor space into a lush and vibrant oasis with our professional gardening services. From lawn care and plant maintenance to landscaping and garden design, our handyman will help you create the garden of your dreams.
            </li>

            <li>
              <strong>Pressure Washing </strong>
              Restore the beauty of your home's exterior with our professional pressure washing services. We'll blast away dirt, grime, and mildew to leave your surfaces looking clean and refreshed.
            </li>

            <li>
              <strong>Strimming </strong>
              Keep your lawn and garden neat and tidy with our strimming services. Our handyman will trim and edge your grass, pathways, and borders to give your outdoor space a manicured finish.
            </li>
            <li>
              <strong>Gutter Cleaning </strong>
              Keep your gutters clear and flowing smoothly with our gutter cleaning services. We'll remove leaves, debris, and other obstructions to prevent water damage and keep your home protected.
            </li>
            <li>
              <strong>Repointing </strong>
              Preserve the integrity of your stone or brickwork with our repointing services. Our handyman will remove deteriorating mortar and replace it with fresh mortar to strengthen and protect your masonry.
            </li>
            <li>
              <strong>Gate Building </strong>
              Enhance the security and aesthetics of your property with our custom gate building services. Whether you need a simple garden gate or a grand entrance gate, our handyman will design and construct a gate that meets your specifications.
            </li>
            <li>
              <strong>Home Renovations </strong>
              Ready to tackle a larger project? Our handyman can help with home renovations, kitchen and bathroom remodels, and other major upgrades to transform your space and increase its value.
            </li>
            <li>
              <strong>Picture Hanging </strong>
              Let us take the hassle out of hanging your artwork, mirrors, and other decorative items. Our handyman will ensure that your pieces are securely and professionally installed, adding the perfect finishing touch to your home.
            </li>
            <li>
              <strong>Plasterboarding </strong>
              Transform your interior spaces with our professional plasterboarding services. Whether you're renovating a room or building an extension, our handyman will install plasterboard quickly and efficiently, creating a smooth and durable surface for painting or wallpapering.
            </li>
          </ul>

          <h3 className="pt-3">Why Choose Us</h3>
          <ul>
            <li>
              <strong>Experience: </strong>
              With years of experience in the industry, our handyman has the skills and expertise to handle any project, big or small.
            </li>

            <li>
              <strong>Attention to Detail: </strong>
              We take pride in our meticulous attention to detail and commitment to quality craftsmanship, ensuring that every job is done right the first time.
            </li>

            <li>
              <strong>Personalized Service: </strong>
              As a one-man operation, we provide personalized service tailored to your specific needs and preferences.
            </li>

            <li>
              <strong>Reliability: </strong>
              You can count on us to show up on time, work efficiently, and complete your project to your satisfaction.
            </li>

            <li>
              <strong>Affordability: </strong>
              We offer competitive pricing and transparent quotes, so you know exactly what to expect before we begin work.
            </li>
          </ul>
        </div>
        <div className={styles.images}>
          {[...Array(5)].map((x, i) =>
            <img
              src={`/property services/${6 - i}.jpg`}
              alt={`Vue Du Vallon Handyman - property services`}
              className={styles.propertyServicesImage}
              width="230px;"
            />
          )}
        </div>
      </div>
    </main>
  );
}
