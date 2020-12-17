import React,{ Component }  from 'react';
import { Button } from 'antd';

import IOS1 from './ios3'
import IOS2 from './ios4'
import IOS3 from './ios5'



export default class IOS extends Component{
  constructor(props){
    super(props)
    this.state={
      show:'none'
    }
  }
  isShow = () =>{
    this.setState({show:'inline'})
  }
    render(){
      const isShow = this.state.show

        return(
            <div style={{width:'49%',fontSize:'20px'}}>
                <div  style={{width:'300px',margin:'8px'}}>
                    IOS
                    <div>
                        <Button onClick={this.isShow}>升级检测</Button>
                    </div>
                   <div style={{display:isShow}}>
                        <IOS1 />
                        <IOS2 />
                        <IOS3 />
                   </div>
                </div>
            </div>
        )
    }

}
