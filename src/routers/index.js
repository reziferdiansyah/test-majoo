import React from "react";
import { Switch, Route } from "react-router-dom";

import { routers } from "./routers";
import Layout from "components/Layout";

const renderWithLayout = (Component, props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

export default function Router() {
  return (
    <Switch>
      {routers.map(({ isExact, path, Component }, i) => (
        <Route
          key={i}
          path={path}
          exact={isExact}
          render={(props) => renderWithLayout(Component, props)}
        />
      ))}
    </Switch>
  );
}
