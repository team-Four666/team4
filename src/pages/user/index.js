import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm, message} from 'antd'
import './index.less'
import qs from 'qs';
class User extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:3,  
            total:10,
            loading:true
        }
    }
    columns = [
          { 
            title: '名称  ',
            dataIndex: 'name',
            key: 'name',
            width:100,
            fixed:'left'
          },
          {
            title: '类型',
            dataIndex: 'foodtype',
            
            width:100,
          },
          {
            title: '图片',
            dataIndex: 'img', 
            render(data){ return(<img width='80px' height='80px' src={data}/>)},
            width:200,
            
            // render(data){
            //     return(<img width='80px' height='80px' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568825384230&di=362a20048f72c733f927e53dbc2b23f5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201502%2F08%2F20150208152211_xeKr5.jpeg"/>)
            // }
          },
          {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
            width:300,
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
            width:300,
            render:(txt,record)=>{
              // console.log(a,b)
                return(
                    <div>
                        <Button type="primary" size="small">修改</Button>
                        <Popconfirm
                          title='你确定要删除吗？'
                          onConfirm={this.confirmDel.bind(this,record._id)}
                        >
                            <Button type="danger" size="small">删除</Button>
                        </Popconfirm>
                        
                    </div>
                )
            }
          }, 
      ];
      confirmDel=(_id)=>{
        // console.log(id)
        let {page,pageSize} =this.state
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
        console.log('页面改变',page,pageSize)
        this.initData(page,this.state.pageSize)
      }
      initData=(page,pageSize)=>{
        this.setState({loading:true})
        this.$axios.post('/hehe/admin/food/findByTypePage',qs.stringify({ page: page,pageSize:pageSize}))
        .then((data)=>{
            // console.log(data)
            this.setState({dataSource:data.list,loading:false})  
        })
    }
    componentDidMount(){
        let {page,pageSize} = this.state
        this.initData(page,pageSize)
    }
    render(){

        let {total,pageSize,loading} = this.state
        return( 
            <Card className='user-container'>
              <Spin tip="数据加载中..." spinning={loading}>
                 <Table dataSource={this.state.dataSource}
                 className="test"
                 columns={this.columns}
                 scroll={ { x:1500,y : 400}}
                 pagination={false}
                />
              </Spin>
                
                <Pagination simple defaultCurrent={1} total={total} pageSize={pageSize} onChange={this.pageChange}/>
            </Card>

        
        )
    }
}
export default User 