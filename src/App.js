import {Switch, Route} from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

import React, {useState} from 'react';
import Sidebar from "./components/Sidebar";

import "./styles/variables.css"
import SearchWeather from './pages/SearchWeather';


export const AppContext = React.createContext()

function App() {

    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <AppContext.Provider value={{isLoading, setIsLoading}}>
            <div className="App">
                <Sidebar/>
                <Switch>
                    <Route path={"/"} exact={true} component={Home}/>
                    <Route path={"/search"} exact={true} component={SearchWeather} />
                    <Route path={"/login"} exact={true} component={Login}/>
                    <Route path={"/signup"} exact={true} component={Signup}/>
                </Switch>
            </div>
        </AppContext.Provider>
    );
}

export default App;
