import Image from "next/image";
import styles from "./galery.module.scss";

export type GalleryProps = {
  gallery: ImageType[]
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

export function Gallery({ gallery, size: { width, height }, vertical }: GalleryProps) {
  return (
    <div className={vertical ? styles.verticalframe : styles.frame}>
      {gallery.map((photo, index) => (
        <img
          className={styles.photo}
          key={index}
          src={photo.src}
          alt={photo.alt}
          width={width}
          height={height}
        />
      ))
      }
    </div >
  )
}
