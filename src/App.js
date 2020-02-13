import React from 'react';
import './App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = ({pastDelay})=>{
  return pastDelay ? null:null
}
const Home = Loadable({
  loader:()=> import ('./components/home/Index'),
  loading: Loading
})
const About = Loadable({
  loader:()=>import('./components/aboutUs/index'),
  loading:Loading
})
const Event = Loadable({
  loader:()=>import('./components/events/index'),
  loading:Loading
})
const Sponsors = Loadable({
  loader:()=>import('./components/sponsors/index'),
  loading:Loading
})
const Problem = Loadable({
  loader:()=>import('./components/problems/index'),
  loading:Loading
})
export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
            <React.Fragment>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/events" component={Event}/>
                <Route exact path = "/sponsors" component={Sponsors}/>
                <Route exact path = "/problems" component={Problem}/>

            </React.Fragment>
        </Switch>
      </BrowserRouter>
    )
  }
}