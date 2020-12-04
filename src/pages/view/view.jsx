import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';


import Home from './menu/home/home'
import Log from './menu/log'
import ModRTU from './menu/modrtu/modrtu'
import ModTCP from './menu/modtcp/modtcp'
import MQTT from './menu/mqtt/mqtt'
import DevRealS from './menu/device-real'
import Upgrade from './menu/Fireware/upgrade'
import HardwareCon from './menu/hardware/hardwareCon'
import ModbusAdress from './menu/modAdress/modbusAdre'
import Communication from './menu/communication/comm'
import Project from './menu/project/proj'
import ProVariable from './menu/ProjectVari/project'




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
                        <Route path='/ModbusRTU-master'  component={ModRTU}></Route>
                        <Route path='/mqtt'  component={MQTT}></Route>

                        <Route path='/modbusAdress'  component={ModbusAdress}></Route>
                        <Route path='/communication'  component={Communication}></Route>
                        <Route path='/project'  component={Project}></Route>
                        <Route path='/proVariable'  component={ProVariable}></Route>


                         {/* <Route path='/termialserver'  component={TermSer}></Route> */}
                        {/* <Route path='/zigbee' component={Zigbee}></Route>
                        
                      
                        <Route path='/hardwareconfig' component={HardwareCon}></Route> */}
                        {/* <Route path='/broker1' component={Broker1}></Route>
                        <Route path='/broker2' component={Broker2}></Route> */}
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

