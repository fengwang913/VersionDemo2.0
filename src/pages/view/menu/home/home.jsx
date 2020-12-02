import React,{ Component }  from 'react';
import NetworkCon from './network';
import PortCon from './port'



export default class Home extends Component{
    constructor(props){
        super(props)
        console.log('是在home页里面额',props)
    }
    render(){

        return(
            <div>
                <div style={{fontSize:'20px',marginTop:'20px'}}>
                    <span>串口参数及配置</span>
                     <PortCon />
                </div>
                <div style={{fontSize:'20px',marginTop:'30px'}}>
                    <span>网口配置</span>
                    <NetworkCon/>
                </div>
            </div> 
        )
    }

    
}