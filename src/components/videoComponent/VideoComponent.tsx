
export type Props = {
  video: string;
  width: string,
  height: string,
  playlist?: string,
}

export default function YouTubeFrame({ video, width, height, playlist }: Props) {
  let url = `https://www.youtube.com/embed/${video}?rel=0&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;`
  if (playlist) url += `playlist=${playlist}&amp;`

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
