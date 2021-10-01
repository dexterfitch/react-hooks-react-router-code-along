import {Route, Switch} from "react-router-dom"
import Home from "./Home";
import No from "./No";
import Login from "./Login";
import GoodMorning from "./GoodMorning";
import Nav from "./Nav";

function App() {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/goodmorning">
                    <GoodMorning />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/no">
                    <No />
                </Route>
            </Switch>
        </>
    )
}

export default App;