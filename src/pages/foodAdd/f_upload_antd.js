import React,{Component} from 'react'
import {Upload,Icon,Button, message} from 'antd'

class Demo extends React.Component {
    constructor(){
        super()
        this.state = {
            fileList: [],
            uploading: false,//false未上传，true上传中
        };
        
    }
  
  handleUpload = () => { 
    const { fileList } = this.state;
    console.log(fileList)
    const formData = new FormData();
    formData.append('hehe', fileList[0]); 
    
    this.$axios.post('/hehe/admin/food/update',formData)
    .then((data)=>{
        console.log(data)
    })
    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like

  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
          console.log("删除某一条",file)
        // this.setState(state => {
        //   const index = state.fileList.indexOf(file);
        //   const newFileList = state.fileList.slice();
        //   newFileList.splice(index, 1);   
        //   return {
        //     fileList: newFileList,
        //   };
        // });
      },
      beforeUpload: file => {
          console.log('beforeUpload',file)
            let fileList=this.state.fileList
            fileList.push(file)
            this.setState({fileList:fileList})
        return false;
      },
      fileList,
    };

    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
    );
  }
}
export default Demo 