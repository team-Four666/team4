import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Tokenmodel from 'components/tokenModel'
import App from './App' 
import Login from 'pages/login'
import Admin from 'pages/admin'
import Food from 'pages/food'
import UserList from 'pages/user'
import UserAdd from 'pages/useradd'
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
                                      <Route path='/admin/food' component={Food}></Route>
                                      <Route path='/admin/user/list' component={UserList}></Route>
                                      <Route path='/admin/user/add' component={UserAdd}></Route>
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