import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ID from "./Components/ID/ID";
import Projects from "./Components/projects/Projects";
import Header from "./Components/components/Header/Header";
import Article from "./Components/article/Article";
import Footer from "./Components/components/Footer/Footer";
import "./App.css";
import Job from "./Components/job/Job";

function App() {
  const [showDetails, setShowDetails] = useState(true);
  const onShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Router>
      <Switch>
        <div className="container-fluid">
          <Header className="row" onShow={onShowDetails} show={showDetails} />
          <div className="row">
            {showDetails && (
              <ID className="col profilePage" onClose={onShowDetails} />
            )}
            <div className="col">
              <Route path="/project/:slug">
                <Article />
              </Route>
              <Route path="/" exact>
                <Projects className="row" id="projectspage" />
                <Job className="row" />
              </Route>
              <Route path="/home">
                <Projects className="row" />
                <Job className="row" />
              </Route>
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
