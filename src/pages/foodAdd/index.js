import React,{Component} from 'react'
import {Card,Button, message} from 'antd'
import qs from 'qs'
class FoodAdd extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            foodtype:'热菜',
            img:'132',
            desc:'',
            price:''
        }
    }
    submit=()=>{
        let {name,foodtype,img,desc,price}=this.state
        console.log(name,foodtype,img,desc,price)
        let query=qs.stringify({name,foodtype,img,desc,price})
        this.$axios.post('/hehe/admin/food/add',query)
        .then((data)=>{
            if(data.err==0){
                message.success('add ok')
            }
        })
    }
    render(){
        let {name,foodtype,img,desc,price}=this.state
        return(
            <Card title='商品添加'>
                <span>名称:</span> <input type='text' value={name} onChange={(e)=>{
                    this.setState({name:e.target.value})
                }}/><br/>
                 <span>类型:</span> 
                 <select value={foodtype} onChange={(e)=>{
                     this.setState({foodtype:e.target.value})
                 }}>
                     <option>热菜</option>
                     <option>凉菜</option>
                     <option>特色菜</option>
                 </select><br/>
                
               <span>图片:</span> <input type='file'/><br/>
                <span>描述:</span> <input type='text' value={desc} onChange={(e)=>{
                    this.setState({desc:e.target.value})
                }}/><br/>
                <span>价格:</span> <input type='text' value={price} onChange={(e)=>{
                    this.setState({price:e.target.value})
                }}/><br/>
                <Button type='primay' onClick={this.submit}>提交</Button>          
                
            </Card>
        ) 
    }
}
export default FoodAdd 