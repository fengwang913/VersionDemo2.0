import React,{ Component }  from 'react';
import aoURL from '../../../../../assets/img/AO.png'


export default class Cpu extends Component{
    constructor(props){
        super(props)
        console.log('CPU现在收到的props是多少呢？？',props)
    }

    render(){
        const index = this.props.index;
        const type = this.props.type;

        return(
            <span  onClick={this.props.selectImg.bind(this,{index},{type})}>
               <img src={ aoURL } style={{width:'200px',height:'200px',marginTop:'63px'}}/>
            </span>
        )
    }

    
}
