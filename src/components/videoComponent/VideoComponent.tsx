
export type Props = {
  video: string;
  width: string,
  height: string,
}

export default function YouTubeFrame({ video, width, height }: Props) {
  const url = `https://www.youtube.com/embed/${video}?rel=0&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;playlist=${video}&amp;`
  
  return (
    <iframe
      src={url}
      width={width}
      height={height}
      allowFullScreen
    >
    </iframe>
  );
}
