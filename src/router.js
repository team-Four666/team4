import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'

import App from './App' 
import Login from 'pages/login'
import Admin from 'pages/admin'
import Food from 'pages/food'
import User from 'pages/user'
import Ad from 'pages/ad'
import Cart from 'pages/cart'

class RootRouter extends Component{
    render(){
        return(
            <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from='/' to='/admin'></Redirect>
                        <Route path='/admin' render={()=>{
                            return(
                                <Admin>
                                      <Route path='/admin/food' component={Food}></Route>
                                      <Route path='/admin/user' component={User}></Route>
                                      <Route path='/admin/ad' component={Ad}></Route>
                                      <Route path='/admin/cart' component={Cart}></Route>


                                </Admin>
                            )
                        }}></Route>
                        <Route path='/login' component={Login}></Route>

                    </Switch>
                 </HashRouter>
            </App>
            
        ) 
    }
}
export default RootRouter