import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Tokenmodel from 'components/tokenModel'
import App from './App' 
import Login from 'pages/login'
import Admin from 'pages/admin'

import FoodList from 'pages/foodList'
import FoodAdd from 'pages/foodAdd'

import UserList from 'pages/user'
import UserAdd from 'pages/useradd'
import UploadFile from 'pages/useradd/upload_file.js'
import UploadBase64 from 'pages/useradd/upload_base64.js'

import Cart from 'pages/cart'
import Banner from 'pages/banner'
import Pie from 'pages/echarts/pie'
import Line from 'pages/echarts/line'
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
                                      

                                      
                                      <Route path='/admin/user/list' component={UserList}></Route>
                                      <Route path='/admin/user/add' component={UserAdd}></Route>
                                      <Route path='/admin/user/file' component={UploadFile}></Route>
                                      <Route path='/admin/user/base64' component={UploadBase64}></Route>

                                      <Route path='/admin/cart' component={Cart}></Route>
                                      <Route path='/admin/banner' component={Banner}></Route>
                                      <Route path='/admin/echarts/pie' component={Pie}></Route>
                                      <Route path='/admin/echarts/line' component={Line}></Route>
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