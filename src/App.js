import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cgpa from "./components/Cgpa";
import Sgpa from "./components/Sgpa";
import Support from "./components/Support";
import { CssBaseline } from "@material-ui/core";
import Demo from "./components/Demo";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <div className="body">
        <Switch>
          <Route path="/cgpa" component={Cgpa}></Route>
          <Route path="/sgpa" component={Sgpa}></Route>
          {/* <Route path='/who-are-we' component={Sgpa}></Route> */}
          <Route path="/support" component={Support}></Route>
          <Route path="/demo" component={Demo} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
