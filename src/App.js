import Details from "./Details/Details";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Preview from "./Preview/Preview";
import "@coreui/coreui/dist/css/coreui.min.css";
import Subscription from "./Subscription/Subscription";
import Itinerary from "./Itinerary/Itinerary";
import Terms from "./Termandcon/Terms";
import Info from "./Contactedperson/Info";
import Bank from "./BankDetails/Bank";

function App() {
  return (
    <div className="App">
      <h1>Client's Page</h1>
      <div className="main">
        <div className="details">
          <h5>Client Details</h5>
          <Details />
        </div>
        <div className="preview">
          <h5> Client's Contacted Person</h5>
          <Info />
        </div>
      </div>

      <Bank />

      <Subscription className="subscription " />
      <hr className="hr"></hr>
      <Itinerary className="itinerary" />
      <hr className="hr"></hr>
      <Terms className="terms" />
    </div>
  );
}

export default App;
