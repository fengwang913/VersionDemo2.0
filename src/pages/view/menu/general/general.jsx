import React,{ Component }  from 'react';
import DataTime from './data';




export default class General extends Component{
    render(){

        return(
            <div  style={{fontSize:'20px',marginTop:'10px'}}>             
                General
                <DataTime />
            </div>
        )
    } 
}
