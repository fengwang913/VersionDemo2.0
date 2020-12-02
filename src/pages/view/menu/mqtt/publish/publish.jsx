import React,{ Component }  from 'react';

import PublishTable from './tabls'



export default class Publish extends Component{
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
            },
            {
                key:'02',
                index:'2',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
            },
            {
                key:'03',
                index:'3',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
            },
            {
                key:'04',
                index:'4',
                topic:'1233',
                zone:'123',
                addr:'1234',
                size:'1',
            }]


        }
    }
    render(){

        return(
            <div>
               <PublishTable originData={this.state.originData}/>
            </div>
        )
    }
    
}