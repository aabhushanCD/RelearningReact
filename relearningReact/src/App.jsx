import "./App.css";
import Footer from "./component/footer/footer";
import Socket from "./component/header/header";
import DoctorsList from "./component/josonDoc/DoctorList";

function App() {
  return (
    <>
      <Socket></Socket>
      <DoctorsList></DoctorsList>
      <Footer></Footer>
    </>
  );
}

export default App;
