import React from 'react';
import Cpu from './cpu';
import Ai from './ai';
import Ao from './ao';




const Display = (props) =>{
    console.log('Display的展示的数据呀',props)
    const data = [...props.list];
    const info = [...props.info]
    console.log('datadatadata',data)
    console.log('infoinfoinfo',info)
 return(
    data.map( (item,index) => {
        console.log('itemitem',item)
        
        if(item === 'CPU'){
            return(
                <Cpu key={index}  
                     index={index} 
                     selectImg={props.selectImg}
                     type={'CPU'}/>
            )
        }
        if(item === 'AI'){
            return(
                <Ai key={index} 
                    index={index} 
                    selectImg={props.selectImg}
                    type={'AI'}/>
            )
        }
        if(item ==='AO'){
            return(
                <Ao key={index}
                    index={index} 
                    selectImg={props.selectImg}
                    type={'AO'}/>
            )
        }else{
            return null;
        }

    })
 )
    

}



export default Display;
