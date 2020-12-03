import React,{ Component }  from 'react';


import IOS from './ios/ios';
import RTS from './rts/rts'


export default class Upgrade extends Component{
    render(){

        return(
            <div style={{marginTop:'25px'}}>
                <div style={{display:'flex' ,height:'86vh'}}>
                    <IOS />
                    <RTS />
                </div>
            </div>
        )
    }

}