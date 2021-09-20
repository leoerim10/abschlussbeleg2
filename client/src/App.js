
import Home from "./components/Home";
import Page2 from "./components/Page2";
import {Route, Switch } from "react-router";
import Header2 from "./components/Header";

function App() {

  return(

  <Switch>
    <Route exact path="/page2" component={Page2} />
    <Route path="/" component={Home}/>
  
</Switch>
)
}




export default App;
