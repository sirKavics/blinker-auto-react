import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
