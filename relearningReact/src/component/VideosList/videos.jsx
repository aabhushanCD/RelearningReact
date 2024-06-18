function VideoList({ videos, emptyHeading }) {
  let heading = emptyHeading;
  let count = videos.length;
  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }

  return (
    <section>
      <h1>{heading}</h1>
      {videos.map((video) => (
        <div key={video.id} style={{ marginBottom: "20px" }}>
          <video src={video.video} controls width="400" />
          <a href={video.url}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </a>
        </div>
      ))}
    </section>
  );
}

export default VideoList;
