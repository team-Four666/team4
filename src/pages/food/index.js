import React,{Component} from 'react'
class Food extends Component{
    initData=()=>{
        this.$axios.post('/hehe/admin/food/findByTypePage',{page:1,pageSize:4,})
        .then((data)=>{
            console.log(data)
        })
    }
    componentDidMount(){
        this.initData()
    }
    render(){
        return(
            <div>
                这里是食品管理页面
            </div>
        )
    }
}
export default Food