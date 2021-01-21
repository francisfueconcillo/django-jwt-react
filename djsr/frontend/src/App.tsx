import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";

import { axiosInstance } from './components/AxiosApi.js';
// import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Hello from "./components/Hello.js";

import { Login } from "./pages";

class App extends Component {
  
  handleLogout() {
    axiosInstance.post('/blacklist/', {
      "refresh_token": localStorage.getItem("refresh_token")
    }).then(response => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;

      location.href="/login";
      // return response;
    }, error => console.log(error));
  };

  render() {
    return (
      <div className="site">
        <nav>
          <Link className={"nav-link"} to={"/"}>Home</Link>
          <Link className={"nav-link"} to={"/login/"}>Login</Link>
          <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
          <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
          <button onClick={this.handleLogout}>Logout</button>
        </nav>
        <main>
          <Switch>
            <Route exact path={"/login/"} component={Login}/>
            <Route exact path={"/signup/"} component={Signup}/>
            <Route exact path={"/hello/"} component={Hello}/>
            <Route path={"/"} render={() => <div>Home again</div>}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;