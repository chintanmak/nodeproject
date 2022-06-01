import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Navbar from './Components/Containers/Navbar';
import Result from "./Components/Pages/Result";
import Maindetails from './Components/Containers/Maindetails';
import Aboutus from "./Components/Pages/Aboutus";

export default function App() {
  return (
    <div>
     <Navbar />
     <BrowserRouter>
     <Routes>
     {/* <Route path="/" element={} > */}
      <Route exact index element={<Home />} />
      <Route exact path="/result" element={<Result />} >
      <Route path="/result/Maindetails" element={<Maindetails />} />
      </Route>
      <Route path="/aboutus" element={<Aboutus />} />
     {/* </Route> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
