import React,{ Component }  from 'react';
import SubscriptTable from './tabls'


export default class Subscript extends Component{
    constructor(props){
        super(props)
        this.state = {
            originData : [{
                key:'01',
                index:'1',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
                type:'byte',
                status:'102',
            },
            {
                key:'02',
                index:'2',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
                type:'float',
                status:'652',
            },
            {
                key:'03',
                index:'3',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
                type:'ushort',
                status:'320',
            },
            {
                key:'04',
                index:'4',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
                type:'double',
                status:'125',
            }]
        }
    }
    render(){

        return(
            <div>
                <SubscriptTable originData={this.state.originData}/>
            </div>
        )
    }
    
}