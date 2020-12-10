import React,{ Component }  from 'react';


import IOS from './ios/ios';
import RTS from './rts/rts'


export default class Upgrade extends Component{
    render(){

        return(
            <div style={{marginTop:'25px',backgroundColor:'white'}}>
                <div style={{display:'flex' ,minHeight:'86vh'}}>
                    <IOS />
                    <div 
                        style={{width:'1px',
                        borderRight:'1px dashed #D3D3D3',
 
                       
                        marginTop:'30px',
                        height:'80vh'}}></div>
                    <RTS />
                </div>
            </div>
        )
    }

}