import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';


import Home from './menu/home/home'
import Log from './menu/log'
// import ModRTU from './menu/modrtu/modrtu'
import ModTCP from './menu/modtcp/modtcp'
// import TermSer from './menu/term-serv'
import MQTT from './menu/mqtt/mqtt'
// import Zigbee from './menu/zigbee'
import DevRealS from './menu/device-real'
import Upgrade from './menu/Fireware/upgrade'
import HardwareCon from './menu/hardware/hardwareCon'

import Broker1 from './menu/mqtt/broker/info1'
import Broker2 from './menu/mqtt/broker/info2'

// import Port01 from './menu/modrtu/port01';
// import Port02 from './menu/modrtu/port02';
// import Port03 from './menu/modrtu/port03';
// import Port04 from './menu/modrtu/port04';
// import Port05 from './menu/modrtu/port05';





export default class View extends Component{
    constructor(props){
        super(props)
       this.state={
           history:''
       }
    }
    render(){
        return(
            <div id='view'>
                <Router>
                    <Switch>
                        <Route path='/' exact component={() =>{  return <Home  />}}></Route>

                        <Route path='/log' component={Log}></Route>  
                        <Route path='/firmware'  component={Upgrade}></Route>
                        <Route path='/devicerealtime' component={DevRealS}></Route>
                        <Route path='/ModbusTCP-master' component={ModTCP}></Route>

                        <Route path='/hardwareconfig' component={HardwareCon}></Route>
                        {/* <Route path='/ModbusRTU-master'  component={ModRTU}></Route>
                        <Route path='/termialserver'  component={TermSer}></Route> */}
                        <Route path='/mqtt' component={MQTT}></Route>
                        {/* <Route path='/zigbee' component={Zigbee}></Route>
                        
                      
                        <Route path='/hardwareconfig' component={HardwareCon}></Route> */}
                        <Route path='/broker1' component={Broker1}></Route>
                        <Route path='/broker2' component={Broker2}></Route>
                        {/*<Route path='/Port1' component={Port01}></Route>
                        <Route path='/Port2' component={Port02}></Route>
                        <Route path='/Port3' component={Port03}></Route>
                        <Route path='/Port4' component={Port04}></Route>
                        <Route path='/Port5' component={Port05}></Route> */}
                        
                        </Switch>
                </Router>  
            </div>
        )
    }


}

