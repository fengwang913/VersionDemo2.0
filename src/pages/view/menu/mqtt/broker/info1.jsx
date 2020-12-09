import React,{ Component }  from 'react';


import BrokerTab from './tabls'
import Broker from './broker'



export default class Broker1 extends Component{
    constructor(props){
        super(props)
        this.state ={
            originData : [{
                key:'01',
                IP:'255.255.255.255',
                port:'1',
                ClientID:'1234',
                ConnectTimeout:'150',
                KeepAliveInterval:'210',
                UserName:'1111',
                UserPassword:'12345677',
                TLS:'使能',
                Connection:'256'
            }]

        }}

    render(){

        return(
            <div>
                <div style={{fontSize:'22px', marginTop:'20px'}}>
                    Broker1
                </div>
                <BrokerTab originData={this.state.originData}/>
                <Broker />
            </div>
        )
    }
    
}