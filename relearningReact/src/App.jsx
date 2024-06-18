import VideoList from "./component/VideosList/videos";

function App() {
  const videos = [
    {
      id: 1,
      video:
        "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
      title: "Dancing",
      description: "In this video the search box is dancing",
      url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <VideoList videos={videos} emptyHeading={""}></VideoList>
      </div>
    </>
  );
}

export default App;
