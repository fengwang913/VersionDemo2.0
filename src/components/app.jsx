import React,{ Component }  from 'react';

import MainLayout from '../pages/base/layout'
// import Login from '../pages/view/login'

// import Header from '../pages/base/header'
// import SiderDemo from '../pages/base/layout'
// import Header from '../pages/base/header';



export default class App extends Component{
 
    render(){
        return(
            <div id='app'>
                {/* <Header /> */}
                <MainLayout />
                {/* <Login /> */}
            </div>
        )
    }


}