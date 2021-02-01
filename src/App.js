import "./App.css";

import BarChart from "./fusion/BarChart";
import FusionLineChart from "./fusion/FusionLineChart";
import TreeMap from "./fusion/TreeMap";

import ApexTreeMap from "./apex/ApexTreeMap";
import BasicBar from "./apex/BasicBar";
import LineChart from "./apex/LineChart";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fusion/basic-bar">
                Fusion Charts - Basic Bar Chart
              </Link>
            </li>
            <li>
              <Link to="/fusion/line">Fusion Charts - Line Chart</Link>
            </li>
            <li>
              <Link to="/fusion/treemap">Fusion Charts - Treemap Chart</Link>
            </li>
            <li>
              <Link to="/apex/basic-bar">Apex Charts - Basic Bar Chart</Link>
            </li>
            <li>
              <Link to="/apex/line-chart">Apex Charts - Line Chart</Link>
            </li>
            <li>
              <Link to="/apex/treemap">Apex Charts - Treemap Chart</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/fusion/basic-bar">
            <h1>FUSION CHARTS - Basic Bar</h1>
            <BarChart />
          </Route>
          <Route path="/fusion/line">
            <h1>FUSION CHARTS - Line Chart</h1>
            <FusionLineChart />
          </Route>
          <Route path="/fusion/treemap">
            <h1>FUSION CHARTS - Treemap</h1>
            <TreeMap />
          </Route>
          <Route path="/apex/basic-bar">
            <h1>APEX CHARTS - BasicBar</h1>
            <BasicBar />
          </Route>
          <Route path="/apex/line-chart">
            <h1>APEX CHARTS - Line Chart</h1>
            <LineChart />
          </Route>
          <Route path="/apex/treemap">
            <h1>APEX CHARTS - Treemap</h1>
            <ApexTreeMap />
          </Route>
          <Route path="/">Home 😁</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
