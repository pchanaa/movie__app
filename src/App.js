import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation"
//<Route/> => Important Props : 1.The screen to render, 2.What to do
const App =()=>{
  return( 
  <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Route path="/about" exact={true} component={ About }/> 
        <Route path="/" exact={true} component={ Home }/>
        <Route path="/movie-detail/:id" exact={true} component={ Detail }/>
  </BrowserRouter>
  )
}
export default App;