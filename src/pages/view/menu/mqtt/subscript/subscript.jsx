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
                type:'byte'
            },
            {
                key:'02',
                index:'2',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
                type:'float'
            },
            {
                key:'03',
                index:'3',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
                type:'ushort'
            },
            {
                key:'04',
                index:'4',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
                type:'double'
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