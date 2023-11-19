

export function VideoPlayer(){
  return (
    <video height={175} width={260} controls autoPlay>
      <source src={'src/mocks/video/sample_video.mp4'}></source>
    </video>
  );
}
