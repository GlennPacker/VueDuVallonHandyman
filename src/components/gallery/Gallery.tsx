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
  // const pairs = gallery.reduce((acc: any[][], photo, index) => {
  //   if (index % 2 === 0) {
  //     acc.push([photo]);
  //   } else {
  //     acc[acc.length - 1].push(photo);
  //   }
  //   return acc;
  // }, []);

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
