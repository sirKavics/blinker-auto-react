import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import FindYourCar from "./pages/FindYourCar.jsx";
import CarInfo from "./pages/CarInfo.jsx";


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-your-car" element={<FindYourCar />} />
          <Route path="/car/:id" element={<CarInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;