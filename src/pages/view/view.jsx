import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';



// import MainLayout from '../base/layout'
// import Login from '../view/login'





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

                        <Route path='/view' exact component={() =>{  return <Home  />}}></Route>
                        <Route path='/view/port' component={() =>{  return <Home  />}}></Route>

                        <Route path='/view/log' component={Log}></Route>  
                        <Route path='/view/firmware'  component={Upgrade}></Route>
                        <Route path='/view/devicerealtime' component={DevRealS}></Route>
                        <Route path='/view/ModbusTCP-master' component={ModTCP}></Route>

                        <Route path='/view/hardwareconfig' component={HardwareCon}></Route>
                        <Route path='/view/ModbusRTU-master'  component={ModRTU}></Route>
                        <Route path='/view/mqtt'  component={MQTT}></Route>

                        <Route path='/view/modbusAdress'  component={ModbusAdress}></Route>
                        <Route path='/view/communication'  component={Communication}></Route>
                        <Route path='/view/project'  component={Project}></Route>
                        <Route path='/view/proVariable'  component={ProVariable}></Route>

                    </Switch>
                </Router>  
            </div>
        )
    }


}

