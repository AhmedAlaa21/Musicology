import "./App.css";
import BestDance from "./components/BestDance";
import Herbert from "./components/Herbert";
import MainSec from "./components/MainSec";
import MoreDetails from "./components/MoreDetails";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Statistics from "./components/Statistics";
import Subscribe from "./components/Subscribe";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSec />
      <Tour />
      <Pricing />
      <MoreDetails />
      <BestDance />
      <Statistics />
      <Herbert />
      <Subscribe />
    </div>
  );
}

export default App;
