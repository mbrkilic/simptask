import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Container } from "react-bootstrap";
import Chars from "./components/Chars";
import { CharDetz } from "./components/CharDetz";
import AddChar from "./components/AddChar";

import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  return (
    <Router>
      <Navbar />

      <main className="container mx-auto px-6 lg:px-0">
        <Container>
          <Routes>
            <Route path="/" element={<Chars />} />

            <Route
              path="/simpsons/:id"
              element={<CharDetz results={results} />}
            />

            <Route path="/add" element={<AddChar />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
