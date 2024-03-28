import React from "react";
import Details from "./components/Details";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchComponent from "./components/Fetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/detail" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <FetchComponent />
    </div>
  );
}

export default App;
