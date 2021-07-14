import { BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"
import Home from "./Components/Home"
import Accounts from "./Components/Accounts"
import Register from "./Components/Register"
import Login from "./Components/Login"
export const routing=(
<Router>
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link className="navbar-brand" to="/home">HOME</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <Link className="nav-link" to="/accounts">Accounts <span className="sr-only">(current)</span></Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/register">Register</Link>
  </li>
    <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
  </ul>
</div>
</nav>
</div>
<Switch>
<Route path="/home" exact component={Home} />
<Route path="/accounts" component={Accounts} />
<Route path="/register" component={Register} />
<Route path="/login" component={Login} />
</Switch>
</Router>
)

