import React,{Component} from 'react'
import {Card,Table,Button} from 'antd'
import foodDate from './foodDate'

import './index.less'
class Food extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[]
                      
        }
    }
    columns = [
        {
            title: '名称  ',//显示内容
            dataIndex: 'name',//下标
            key: 'name',//对应每一条数据的key值
            width:150,
            fixed:'left'
          },
          {
            title: '类型',
            dataIndex: 'foodtype',
            key: 'foodtype',
            width:100,
          },
          {
            title: '图片',
            dataIndex: 'imgPath', 
            key: 'imgPath',
            width:200,
            render(data){
                return(<img width='80px' src='http://img.bimg.126.net/photo/_lwWX4iDpsnriYFNG89HDA==/3975834046054828912.jpg'/>)
            }
          },
          {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
            width:200
          },
          {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            width:100,
          },
          {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            width:200,
            fixed:'right',
            render(a,b){
                return(
                    <div>
                        <Button type='primary' size='small'>修改</Button>
                        <Button type='danger' size='small'>删除</Button>
                    </div>
                )
            }
          },
      ]
    componentDidMount(){
        setTimeout(()=>{
            this.setState({dataSource:foodDate})
        },500)
        
    }
    // initData=()=>{
    //     this.$axios.post('/hehe/admin/food/findByTypePage',{page:1})
                           
    //     .then((data)=>{
    //         console.log(data)
    //             this.setState({dataSource:data.data.list})  
    //     })
    // }
    // componentDidMount(){
    //     this.initData()
    // }
    render(){
        return( 
            <Card className='food-container'>
                <Table dataSource={this.state.dataSource} 
                       className='test'
                       columns={this.columns} 
                       scroll={{x:1000,y:400}}
                       />
            </Card> 
        )
    } 
}
export default Food