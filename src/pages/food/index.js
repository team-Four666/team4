import React,{Component} from 'react'
import {Card,Table,Button,Pagination} from 'antd'
// import foodDate from './foodDate'
import './index.less'
const qs = require('qs');
class Food extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:3,
            total:10
                      
        }
    }
    columns = [
        {
            title: '名称  ',//显示内容
            dataIndex: 'name',//下标
            key: 'name',//对应每一条数据的key值
            width:200,
            fixed:'left'
          },
          {
            title: '类型',
            dataIndex: 'foodtype',
            key: 'foodtype',
            width:200,
          },
          {
            title: '图片',
            dataIndex: 'imgPath', 
            key: 'imgPath',
            width:200,
            render(data){
                return(<img width='80px' src='http://n.sinaimg.cn/sinacn15/224/w640h384/20180520/1b6d-haturft2415067.jpg'/>)
            }
          },
          {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
            width:300
          },
          {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            width:200,
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
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({dataSource:foodDate})
    //     },500)
        
    // }
    pageChange=(page,pageSize)=>{
        // console.log('页码改变',page,pageSize)
        this.initData(page,this.state.pageSize)
    }

    initData=(page,pageSize)=>{ 
        this.$axios.post('/hehe/admin/food/findByTypePage',qs.stringify({page:page,pageSize:pageSize}))                    
        .then((data)=>{
            console.log(data)
                this.setState({dataSource:data.list})  
        })
    }
    componentDidMount(){
        let {page,pageSize}=this.state
        this.initData(page,pageSize)
    }

    render(){
        let {total,pageSize}=this.state
        return( 
            <Card className='food-container'>
                <Table dataSource={this.state.dataSource} 
                       className='test'
                       columns={this.columns} 
                       scroll={{x:1500,y:400}}
                       pagination={false}
                       />
                <Pagination simple defaultCurrent={1} total={total} pageSize={pageSize} onChange={this.pageChange}/>
            </Card> 
        )
    }  
}
export default Food