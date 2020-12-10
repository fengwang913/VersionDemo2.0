import React,{ useEffect, useState }  from 'react';

const MechineTime =() => {
    const [nowtime,setNowtime] = useState(new Date().toLocaleTimeString())
  
    useEffect(() => {
       setInterval(() => {
        setNowtime(new Date().toLocaleTimeString())
      },1000)
  
    })
    return(
        <div id='nowtimes'>             
               现在的设备时间为：{nowtime}
            </div>
    )
}

export default  MechineTime 