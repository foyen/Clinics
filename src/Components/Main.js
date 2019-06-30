import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ClinicSearchWrapper from "./ClinicSearchWrapper";
import ContentWrapperComponent from "./ContentWrapperComponent";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ContentWrapperComponent} />
          <Route exact path="/map" component={ClinicSearchWrapper} />
        </Switch>
      </main>
    );
  }
}
