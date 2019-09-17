import React ,{Component,Fragment} from 'react'
import {Menu,Icon}from 'antd'
import {withRouter} from 'react-router-dom'
import data from './navData'
const {SubMenu} = Menu


class leftNav extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({data:data.data})
        })
    }
    jump=(path)=>{
       this.props.history.push(path)
    }
    renderItem(arr){
        if(!arr.length){ return '暂无数据'}
            return arr.map((item)=>{
                if(item.children){
                    return(
                        <SubMenu title={item.name}  key={item.key}>
                            {this.renderItem(item.children)}
                        </SubMenu>
                    )
                } else{
                    return(
                        <Menu.Item key={item.key}
                            onClick={this.jump.bind(this,item.path)}
                        >{item.name}</Menu.Item>
                    )
                }
            })
      
    }
    render(){  
        console.log(this)
        return(
            <Fragment>
                 <Menu theme='dark' mode="vertical">
                     {/* {this.renderItem(data.data)} */}
                     {this.renderItem(this.state.data)}
                </Menu>
            </Fragment>
        )
    }
}
export default withRouter(leftNav)  