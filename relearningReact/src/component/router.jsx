import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./tic-tac-toe/tic-tac-toe";
import Video from "./VideosList/video";
import App from "../App";
function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/game" element={<Game />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
