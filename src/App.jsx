import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import FindYourCar from "./pages/FindYourCar.jsx";
import Car from "./pages/Car.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/findyourcar" element={<FindYourCar />} />
          <Route path=":id" element={<Car />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
