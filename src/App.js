import Index from "./Pages";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
        <Toaster position="bottom-center"></Toaster>
      </div>
    </Router>
  );
}

export default App;
