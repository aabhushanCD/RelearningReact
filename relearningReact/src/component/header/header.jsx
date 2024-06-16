import { Server } from "socket.io";
import "./header.module.css";
export default function Socket() {
  return (
    <>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" />
        <button>Send</button>

        <button class="">Disconnect</button>
      </form>
    </>
  );
}
