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

export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
            <React.Fragment>
                <Route exact path="/" component={Home}/>
            </React.Fragment>
        </Switch>
      </BrowserRouter>
    )
  }
}