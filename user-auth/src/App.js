import React from "react";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";
import Layout from "./containers/";
const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route key={Math.random()} {...route} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
