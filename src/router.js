 import React,{Component} from 'react'
 import {HashRouter,Route,Switch} from 'react-router-dom'
 import App from './App'
 import Login from 'pages/login'
 import Admin from 'pages/admin'
 class RootRouter extends Component{
     render(){
         return(
             <App>
                 <HashRouter>
                    <Switch>
                        <Route path = '/admin' component={Admin}></Route>
                        <Route path = '/login' component={Login}></Route>
                    </Switch>
                 </HashRouter>
             </App>
         )
     }
 }
 export default RootRouter