import React,{Component} from 'react'
import {Card} from 'antd'
import Echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
class Pie extends Component{
    constructor(){
        super()
        this.state={
            option:{
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:274, name:'联盟广告'},
                            {value:235, name:'视频广告'},
                            {value:400, name:'搜索引擎'}
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                    }
                ]
            }           
        }
    }
    updata=()=>{
        //修改引用类型的数据会修改原数据，可能导致数据页面不变
        let options=JSON.parse(JSON.stringify(this.state.option))
        let newData=[
            {value:360, name:'直接访问'},
            {value:300, name:'邮件营销'},
            {value:274, name:'联盟广告'},
            {value:290, name:'视频广告'},
            {value:300, name:'搜索引擎'}
        ]
        options.series[0].data=newData
        // let newdata={
        //     series : [
        //         {
        //             name:'访问来源',
        //             type:'pie',
        //             radius : '55%',
        //             center: ['50%', '50%'],
        //             data:[
        //                 {value:335, name:'直接访问'},
        //                 {value:310, name:'邮件营销'},
        //                 {value:274, name:'联盟广告'},
        //                 {value:235, name:'视频广告'},
        //                 {value:400, name:'搜索引擎'}
        //             ].sort(function (a, b) { return a.value - b.value; }),
        //             roseType: 'radius',
        //         }
        //     ]
        // }
        this.setState({option:options})
    }
    render(){
        
        return(
            <Card title="饼状图">
                <ReactEcharts option={this.state.option} />
                <button onClick={this.updata}>更新数据</button>
            </Card>
        )
    }
}
export default Pie