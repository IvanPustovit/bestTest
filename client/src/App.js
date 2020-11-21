import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import MainPage from "./pages/MainPage";
import UsersPage from "./pages/UsersPage";
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
        <Route path="/user/:id">
          <UsersPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
