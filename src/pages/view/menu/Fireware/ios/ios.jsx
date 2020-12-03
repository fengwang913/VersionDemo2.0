import React,{ Component }  from 'react';
import { Button } from 'antd';

import IOS3 from './ios3'
import IOS4 from './ios4'
import IOS5 from './ios5'





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
            <div style={{width:'49%',backgroundColor:'white',fontSize:'20px'}}>
                <div  style={{width:'300px',margin:'8px'}}>
                    IOS
                    <div>
                        <Button onClick={this.isShow}>升级检测</Button>
                    </div>
                   <div style={{display:isShow}}>
                        <IOS3 />
                        <IOS4 />
                        <IOS5 />
                   </div>
                </div>
            </div>
        )
    }

}



