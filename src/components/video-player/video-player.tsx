

interface Props {
  height: number;
  width: number;
  sourceSrc: string;
}

export function VideoPlayer({height, width, sourceSrc}: Props){
  return (
    <video height={height} width={width} controls autoPlay>
      <source src={sourceSrc}></source>
    </video>
  );
}
