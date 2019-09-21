import React,{Component} from 'react'
import { Card ,Button, message} from 'antd'
import qs from 'qs'
// import './index.less'
class UserAdd extends Component{
    constructor(){
        super()
        this.state={name:'',foodtype:'热菜',img:'',desc:'',price:''}
    }
    submit=()=>{
        let {name,foodtype,img,desc,price} = this.state
        console.log({name,price,img,desc,foodtype})
        
        if(img == ''){
            message.error('请先上传图片')
        }else{
            let query = qs.stringify({name,foodtype,img,desc,price})
            console.log(query)
            this.$axios.post('/hehe/admin/food/add',query)
            .then((data)=>{
                if(data.err==0){
                    message.success('add ok')
                }
            })    
        }

        
    }
    upload=()=>{
        let file=this.refs.file.files[0]
        var r = new FileReader();    //本地预览
        r.onload = () =>{
            console.log(r.result);    //图片的base64
            this.setState({img:r.result})
        }
        r.readAsDataURL(file);       //本地预览对象进行读取
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

                <input type="file" ref='file'/><br/><br/>
                <Button onClick={this.upload}>上传</Button>
                <img src={img} width="80" height="80" alt=''/>
                <hr/>

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