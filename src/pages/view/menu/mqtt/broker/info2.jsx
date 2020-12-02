import React,{ Component }  from 'react';


import BrokerTab from './tabls'
import Broker from './broker'



export default class Broker2 extends Component{
    constructor(props){
        super(props)
        this.state ={
            originData : [{
                key:'01',
                IP:'255.255.255.255',
                port:'2',
                ClientID:'12',
                ConnectTimeout:'21',
                KeepAliveInterval:'210',
                UserName:'1111',
                UserPassword:'12345677',
                TLS:'不使能'
            }]

        }}

    render(){

        return(
            <div>
                <div style={{fontSize:'22px', marginTop:'20px'}}>
                    Broker2
                </div>
                <BrokerTab originData={this.state.originData}/>
                <Broker />
            </div>
        )
    }
    
}
