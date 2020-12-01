import React,{ Component } from 'react';

export default class Header extends Component{

    render(){
        return(
            <div style={{display:'flex',height:'6vh', minWidth:'100vw'}}>
                <div style={ {
                            width :'250px',
                            fontSize:'25px',
           
                            // backgroundColor:'#282c34',
         
                        } }>
                            <div style={{marginLeft:'10px'}}> 
                                配置信息
                            </div>
                        
                </div>
                <div style={ {
                        
                        fontSize:'15px',
                        // textAlign:"right",
                        minWidth:'84.5vw',
                        backgroundColor:'#043D5D',
                        color:'white',
                        
                    } }>
                        <div style={{marginRight:'12px',marginTop:'5px'}}>
                        设备ID : 1234
                        </div>
                        <div style={{marginRight:'12px'}} >
                        设备类型 ：234
                </div>
                    
        </div>
        </div>
        
        )
    }
}
