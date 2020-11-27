import {Switch, Route} from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/login"} exact={true} component={Login} />
        <Route path={"/signup"} exact={true} component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
