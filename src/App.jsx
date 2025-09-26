import Home from "./pages/Home.jsx";
import FindYourCar from "./pages/FindYourCar.jsx";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/findyourcar"  component={FindYourCar} />
      </div>
    </Router>
  );
}

export default App;
