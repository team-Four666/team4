import React,{Component} from 'react'
import { Form, Icon, Input, Button, Card,message } from 'antd';
import './index.less'

class Login extends Component{
    login=()=>{
    //   let result =this.props.form.getFieldsValue()
      this.props.form.validateFields((err,data)=>{
        console.log(err,data)
        if(err){
            message.error('输入信息有误')
        }else{

        }
      })
    //   console.log(result)
    }
    render(){
        // console.log('login',this)
        const { getFieldDecorator } = this.props.form
        return(
            // 因为form表单有默认提交事件，所以在这里用Card/div,也可以选择取消默认表单事件
            <Card className='login'>
                <Form.Item>
                    {getFieldDecorator('us',{
                         rules: [{ required: true, message: '用户名名不能为空' },
                                 { max: 8, message: '最多输入八个字符' },
                                 { min: 3, message: '最少输入为三个字符' },
                        ],
                    })(//getFieldDecorator：把受关联的input组件放到进去，input输入得值会和us进行关联
                       
                       <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Password"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('ps',{})(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary"
                     onClick={this.login}
                     htmlType="submit" className="login-form-button">   
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Card>
        ) 
    }
}
export default  Form.create()(Login);