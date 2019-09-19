import React ,{Component,Fragment} from 'react'
import {Card}from 'antd'
import {connect} from 'react-redux'
import './index.less'
import ActionCretor from '../../store/actionCreator'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
class TokenModel  extends Component{
    back=()=>{
        //将模态框隐藏
        //路由跳转到登录页面
        this.props.changeModelState()
        this.props.history.push('/login')
    }
    render(){  
        console.log(this)
        return(
            <Fragment>
                {!this.props.modelState|| <div  className="tokenModel">
                <Card>
                    <p>token丢失请重新登录</p>
                    <button onClick={this.back}>返回登录</button>
                 </Card>
            </div>
            }
            </Fragment>
               
        )
    }
}
// export default connect(state=>state,(dispatch)=>{
//     return{
//         test(){
//            dispatch(ActionCretor.changeModelState()) 
//         }
//     }
// })(TokenModel)
let  NewComponent = withRouter(TokenModel)
export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCretor,dispatch)
})(NewComponent)