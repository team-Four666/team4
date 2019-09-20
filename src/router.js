import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Tokenmodel from 'components/tokenModel'
import App from './App' 
import Login from 'pages/login'
import Admin from 'pages/admin'
import FoodList from 'pages/foodList'
import FoodAdd from 'pages/foodAdd'
import User from 'pages/user'
import Cart from 'pages/cart'
import Banner from 'pages/banner'

class RootRouter extends Component{
    render(){
        return(
            <App>
                <HashRouter>
                   <Tokenmodel></Tokenmodel>
                    <Switch>
                        <Redirect exact from='/' to='/login'></Redirect>
                        <Route path='/admin' render={()=>{
                            return(
                                <Admin>
                                      <Route path='/admin/food/list' component={FoodList}></Route>
                                      <Route path='/admin/food/add' component={FoodAdd}></Route>
                                      <Route path='/admin/user' component={User}></Route>
                                      <Route path='/admin/cart' component={Cart}></Route>
                                      <Route path='/admin/banner' component={Banner}></Route>
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