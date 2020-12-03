import React,{ Component } from 'react';

import {
    MenuOutlined,
  } from '@ant-design/icons';

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
   
       

    render(){
        return(
            <div style={{display:'flex',height:'7vh', minWidth:'100vw'}}>
                <div style={ {
                            width :'220px',
                            fontSize:'25px',       
                        } }>
                            <div style={{display:'flex', width :'198px',}}>
                                <div style={{marginLeft:'20px',
                                            marginTop:'10px'}}>
                                    {React.createElement(MenuOutlined, {
                                            className: 'trigger',
                                            onClick: this.props.toggle,
                                    })}
                                </div>
                                <div style={{marginLeft:'10px',
                                        marginTop:'10px',
                                        color:'#043D5D'}}> 
                                    配置信息
                                </div>

                            </div>
                        
                </div>
                <div style={ {
                        minWidth:'84.5vw',
                        backgroundColor:'#043D5D',
                    } }>
                        <div style={{marginLeft:'14px',
                                marginTop:'6px',
                                fontSize:'20px',
                                color:'white',}}>
                            Anybus Communicator
                        </div>
                        <div style={{marginLeft:'14px',
                                fontSize:'12px',
                                color:'#C0C0C0',}} >
                            Article Number: ABC3007 Version: 1.1.1 Serial Number: A0477E0C GUI Version: 1.01.1
                        </div>
                        
                    
        </div>
        </div>
        
        )
    }
}