import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import MainPage from "./pages/MainPage";
import UserStatistic from "./pages/UserStatistic";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/stats">
          <UserStatistic />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
