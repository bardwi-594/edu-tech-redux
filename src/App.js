import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Home from "./components/Home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Forgotpass from "./components/auth/Forgotpassword";
import Dashboard from "./components/Dashboard/Dashboard";
import reducers from './reducers';

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk)
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            excat
            path="/dashboard/codePlayground"
            render={() => <Dashboard codePlayground={true} />}
          />
          <Route
            excat
            path="/dashboard/:activityId"
            render={() => <Dashboard activityDetails={true} />}
          />
          <Route path="/dashboard" component={Dashboard} />
          <Route excat path="/signup" component={Signup} />
          <Route excat path="/forgot" component={Forgotpass} />
          <Route path="/login" component={Login} />
          <Route excat path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
