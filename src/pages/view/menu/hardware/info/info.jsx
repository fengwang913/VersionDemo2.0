import React,{ Component }  from 'react';


// import AiTab from './ai/aiTab'
// import AoTab from './ao/aoTab'
// import CpuTab from './cpu/cpuTab'
import Ai from './ai/ai'
import Ao from './ao/ao'
import Cpu from './cpu/cpu'

export default class Info extends Component{
    constructor(props){
        super(props)

    }

    render(){
        const show = [...this.props.show];

        const Cpushow = show[0].CpuShow;
        const Aishow = show[0].AiShow;
        const Aoshow =show[0].AoShow;



        return(
            <div>
                <div  style={{display:Cpushow}}>
                    <Cpu info={this.props.info}/>

                </div>
                <div  style={{display:Aishow}}>
                    <Ai info={this.props.info}/>
                </div>
                <div  style={{display:Aoshow}}>
                    <Ao info={this.props.info}/>

                </div>
            </div>
            
        )
    }

    
}
