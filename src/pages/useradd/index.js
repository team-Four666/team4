import React,{Component} from 'react'
import { Card ,Button, message} from 'antd'
import qs from 'qs'
// import './index.less'
class UserAdd extends Component{
    constructor(){
        super()
        this.state={name:'',foodtype:'热菜',img:'111',desc:'',price:''}
    }
    submit=()=>{
        let {name,foodtype,img,desc,price} = this.state
        console.log({name,price,img,desc,foodtype})
        let query = qs.stringify({name,foodtype,img,desc,price})
        console.log(query)
        this.$axios.post('/hehe/admin/food/add',query)
        .then((data)=>{
            if(data.err==0){
                message.success('add ok')
            }
        })
    }
    render(){
        let {name,price,img,desc,foodtype} = this.state
        return(
            <Card title="商品添加">
                <input type="text" value={name} onChange={(e)=>{
                    this.setState({name:e.target.value})
                }}/> 名称<br/><br/>
                <select value={foodtype} onChange={(e)=>{
                    this.setState({foodtype:e.target.value})
                }}> 
                    <option>热菜</option>
                    <option>凉菜</option>
                    <option>食堂菜</option>
                </select>类型<br/><br/>
                <input type="file"/><br/><br/>
                <input type="text" value={desc} onChange={(e)=>{
                    this.setState({desc:e.target.value})
                }}/> 描述<br/><br/>
                <input type="number" value={price} onChange={(e)=>{
                    this.setState({price:e.target.value})
                }}/> 价格<br/><br/>
                <Button type="primay" onClick={this.submit}>提交</Button><br/>
            </Card>
        ) 
    }
}
export default UserAdd 