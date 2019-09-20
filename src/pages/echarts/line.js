import React,{Component} from 'react'
import {Card} from 'antd'
import Echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
class Line extends Component{
    constructor(){
        super()
        this.state={
            option :{
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    }
    updata=()=>{
        //修改引用类型的数据会修改原数据，可能导致数据页面不变
        let options=JSON.parse(JSON.stringify(this.state.option))
        let newData=[800, 600, 960, 934, 1690, 1130, 1370]
        options.series[0].data=newData
        this.setState({option:options})
    }
    render(){
        
        return(
            <Card title="折线图">
                <ReactEcharts option={this.state.option} />
                <button onClick={this.updata}>更新数据</button>
            </Card>
        )
    }
}
export default Line