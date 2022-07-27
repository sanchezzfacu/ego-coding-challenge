import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
