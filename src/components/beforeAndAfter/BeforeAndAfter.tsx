import Image from "next/image";
import styles from "./BeforeAndAfter.module.css";

export type BeforeAndAfterProps = {
  before: ImageType
  after: ImageType
  size: {
    width: number,
    height: number
  },
  vertical?: boolean
};
export type ImageType = {
  src: string,
  alt: string,
};

export function BeforeAndAfter({ before, after, size: { width, height }, vertical }: BeforeAndAfterProps) {
  return (
    <div className={vertical ? styles.verticalframe : styles.frame}>
      <div className={styles.before}>
        <img
          src={before.src}
          alt={before.alt}
          width={width}
          height={height}
        />
      </div>

      <div className={styles.after}>
        <img
          src={after.src}
          alt={after.alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}
