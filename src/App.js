import Index from "./Pages";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { LoginPage } from "./Pages/components/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  const accesToken = useSelector((state) => state.user);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/landing-page">
            {accesToken ? <Index /> : <Redirect to="/landing-page" />}
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
        <Toaster position="bottom-center"></Toaster>
      </div>
    </Router>
  );
}

export default App;
