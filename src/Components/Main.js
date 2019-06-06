import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MapContainer from "./ContainerComponent";
import ContentWrapperComponent from "./ContentWrapperComponent";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ContentWrapperComponent} />
          <Route exact path="/map" component={MapContainer} />
        </Switch>
      </main>
    );
  }
}
