import "./app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./component/login/login";
import Main from "./component/main/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]}>
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
