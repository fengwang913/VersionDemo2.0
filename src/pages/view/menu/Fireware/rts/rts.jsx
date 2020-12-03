import React,{ Component }  from 'react';
import {  Button } from 'antd';

import RtsInfo from './rtsInfo'




export default class RST extends Component{
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
            <div  style={{width:'49%',backgroundColor:'white',marginLeft:10,fontSize:'20px'}}>
   
                <div  style={{width:'300px',margin:'8px'}}>
                    RTS
                    <div>
                          <Button onClick={this.isShow}>升级检测</Button>
                    </div>
                    <div style={{display:isShow}}>
                      <RtsInfo />
                    </div>
                </div>
            </div>
        )
    }

    
}