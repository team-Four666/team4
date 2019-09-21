import React,{Component} from 'react'
import {Card,Button, message} from 'antd'

class FupaloadFile extends Component{
    constructor(){
        super()
        this.state={
            img:''
        }
    }
    submit=()=>{
      let file = this.refs.file.files[0]
      var r =new FileReader();
      r.onload=()=>{
          console.log(r.result);
          this.setState({img:r.result})
      }
      r.readAsDataURL(file);
    }
    render(){
        let {img }=this.state
        return(
            <Card title='文件上传'>
                <span>图片:</span> <input type='file' ref='file'/><br/>
                <img src={img} alt=''/>
                <Button type='primay' onClick={this.submit}>提交</Button>          
            </Card>
        ) 
    }
}
export default FupaloadFile 