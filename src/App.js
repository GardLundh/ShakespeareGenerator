import React from "react";

import { TextGenerator, Header, About } from "./components";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/ShakespeareGenerator" component={TextGenerator} />
        <Route exact path="/ShakespeareGenerator/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
