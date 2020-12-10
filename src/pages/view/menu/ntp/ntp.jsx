import React,{ Component }  from 'react';

import MechineTime from './time'


export default class Ntp extends Component{
    render(){

        return(
            <div  style={{fontSize:'20px',marginTop:'20px'}}>             
                NTP
                <div>
                    <MechineTime />
                </div>
            </div>
        )
    } 
}
