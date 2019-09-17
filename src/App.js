import React from 'react';
import 'style/test.less'
import {Button} from 'antd'
function App(props) {
  return (
    <div className="App">
      {props.children}
      <Button type="danger">
          hehe
      </Button>
      <p>这里是APP</p>
    </div>
  );
}

export default App;
