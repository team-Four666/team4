import React,{Component} from 'react'
import { Card ,Button, message} from 'antd'
// import qs from 'qs'

class UserAdd extends Component{
    constructor(){
        super()
        
    }
    submit=()=>{
        let file=this.refs.file.files[0]
        console.log(file)
        let formData=new FormData()
        formData.append('hehe',file)
        let config = {
            headers:{'Content-Type':'multipart/form-data'}
        };
        this.$axios.post('/hehe/admin/food/add',formData,config)
        .then((res)=>{
            console.log(res)
        })
    }
    render(){
        return(
            <Card title="商品上传">
              
                <input type="file" ref='file'/><br/><br/>
             
                <Button type="primay" onClick={this.submit}>提交</Button><br/>
            </Card>
        ) 
    }
}
export default UserAdd 