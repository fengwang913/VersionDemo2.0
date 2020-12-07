import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';


import MainLayout from '../base/layout'
import Login from '../view/login'





export default class MainView extends Component{
    constructor(props){
        super(props)
       this.state={
           history:''
       }
    }
    render(){
        return(
            <div id='page'>
                <Router>
                    <Switch>
                        
                            {/* <Route  path="/login" component={Login}/> */}
                            <Route path='/login' exact component={() =>{  return <Login  />}}></Route>
                            <Route path='/view' component={() =>{  return <MainLayout  />}}></Route>

                           

                        </Switch>
                </Router>  
            </div>
        )
    }


}

