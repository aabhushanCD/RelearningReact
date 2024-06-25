import ResponsiveAppBar from "../header/header";
import VideoList from "./videos";
import Footer from "../footer/footer";
export default function Video() {
  const videos = [
    {
      id: 1,
      video:
        "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
      title: "Dancing",
      description: "In this video the search box is dancing",
      url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    },
    // {
    //   id: 2,
    //   video:
    //     "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    //   title: "Dancing",
    //   description: "In this video the search box is dancing",
    //   url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    // },
    // {
    //   id: 3,
    //   video:
    //     "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    //   title: "Dancing",
    //   description: "In this video the search box is dancing",
    //   url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    // },
    // {
    //   id: 4,
    //   video:
    //     "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    //   title: "Dancing",
    //   description: "In this video the search box is dancing",
    //   url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    // },
    // {
    //   id: 5,
    //   video:
    //     "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    //   title: "Dancing",
    //   description: "In this video the search box is dancing",
    //   url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    // },
    // {
    //   id: 6,
    //   video:
    //     "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    //   title: "Dancing",
    //   description: "In this video the search box is dancing",
    //   url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    // },
    // {
    //   id: 7,
    //   video:
    //     "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    //   title: "Dancing",
    //   description: "In this video the search box is dancing",
    //   url: "https://www.shutterstock.com/shutterstock/videos/3525692021/preview/stock-footage-black-background-search-bar-and-online-for-website-information-and-question-with-url-internet.webm",
    // },
  ];

  return (
    <>
      <ResponsiveAppBar />
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
      <Footer></Footer>
    </>
  );
}
