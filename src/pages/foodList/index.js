import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm, message} from 'antd'
// import foodDate from './foodDate'
import './index.less'
const qs = require('qs');
class Food extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:4,
            total:10,
            loading:true
                      
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
            dataIndex: 'img', 
            key: 'img',
            width:200,
            render(data){
                // return(<img width='80px' src='http://n.sinaimg.cn/sinacn15/224/w640h384/20180520/1b6d-haturft2415067.jpg'/>)
                return(<img width='100px' width='100px' src={data}/>)
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
            render:(text,record)=>{
                // console.log('删除数据',a,b)
                return(
                    <div>
                        <Button type='primary' size='small'>修改</Button>
                        <Popconfirm title='确认要删除吗'
                        // 
                        onConfirm={this.confirmDel.bind(this,record._id)}
                        >
                            <Button type='danger' size='small'>删除</Button>
                        </Popconfirm>
                        
                    </div>
                )
            }
          },
      ]

    confirmDel=(_id)=>{
        console.log(_id)  
        let {page,pageSize}=this.state
        this.$axios.post('/hehe/admin/food/del',qs.stringify({_id:_id})) 
        .then((data)=>{
            if(data.err==0){
                message.success('删除ok')
                this.initData(page,pageSize)
            }else{
                message.error('删除失败请重试')
            }
        })    
    }
    
    pageChange=(page,pageSize)=>{
        // console.log('页码改变',page,pageSize)
        this.setState({page:page})
        this.initData(page,this.state.pageSize)
    }

    initData=(page,pageSize)=>{ 
        this.setState({loading:true}) 
        this.$axios.post('/hehe/admin/food/findByTypePage',qs.stringify({page:page,pageSize:pageSize}))                    
        .then((data)=>{
            console.log(data)
                this.setState({dataSource:data.list,loading:false})  
        })
    }
    componentDidMount(){
        let {page,pageSize}=this.state
        this.initData(page,pageSize)
    }

    render(){
        let {total,pageSize,loading}=this.state
        return( 
            <Card className='food-container'>
                <Spin tip='数据加载ing'
                      spinning={loading}
                >
                    <Table dataSource={this.state.dataSource} 
                        className='test'
                        columns={this.columns} 
                        scroll={{x:1500,y:400}}
                        pagination={false}
                        />
                </Spin>
                <Pagination simple defaultCurrent={1} total={total} pageSize={pageSize} onChange={this.pageChange}/>
            </Card> 
        )
    }  
}
export default Food