import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./component/login/login";
import Main from "./component/main/main";

function App({ authService }) {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]}>
          <div className={styles.app}>
            <Login authService={authService} />
          </div>
        </Route>
        <Route path="/main">
          <Main authService={authService} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
