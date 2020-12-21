import React,{ useEffect, useState }  from 'react';
import { Switch , Button  } from 'antd';
// import { Select } from 'antd';

// const { Option } = Select;

// function onChange(value) {
//   console.log(`selected ${value}`);
// }

// function onBlur() {
//   console.log('blur');
// }

// function onFocus() {
//   console.log('focus');
// }

// function onSearch(val) {
//   console.log('search:', val);
// }


const DataTime =() => {
    const [nowtime,setNowtime] = useState(new Date().toLocaleTimeString())
    const [nowyear,setNowyear] = useState(new Date().getFullYear())
    const [nowmonth,setNowmonth] = useState(new Date().getMonth())
    const [nowday,setNowday] = useState(new Date().getDay())

    const [disabled,setDisabled] =useState(false)
    // const [modtime,setModtime] = useState(new Date().toLocaleTimeString())
  
    useEffect(() => {
       setInterval(() => {
        setNowtime(new Date().toLocaleTimeString())
        setNowyear(new Date().getFullYear())
        setNowmonth(new Date().getMonth())
        setNowday(new Date().getDay()) 
      },1000)
  
    })

    const handleDisabledChange = () =>{
        setDisabled(!disabled)
      
    }
    return(
        <div style={{backgroundColor:'white',padding:'10px',marginTop:'10px',height:'82vh'}}> 
            <div style={{fontSize:'24px'}}>
                日期和时间
            </div>
            <div style={{fontSize:'18px',padding:'5px'}}>
                <div style={{marginBottom:'10px'}}>
                    当前的设备时间为
                </div>
                <div style={{fontSize:'16px',marginBottom:'10px',marginTop:'10px'}}>
                   {nowyear} 年 { nowmonth } 月 { nowday } 日 {nowtime}
                </div>
                <div>
                    自动设置时间
                    <div style={{marginBottom:'10px',marginTop:'10px'}}>
                        <Switch  checked={disabled} onChange={handleDisabledChange} />
                    </div>
                </div>
                <div>
                    手动设置时间
                    <div style={{marginBottom:'10px',marginTop:'10px'}}>
                        <Button type="primary" disabled={disabled}>
                            更  改
                        </Button>
                    </div>
                </div>
                
            </div>
            {/* <div style={{fontSize:'24px',marginTop:'15px'}}>
                语言设置
                <div>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="简体中文"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="chinese">简体中文</Option>
                        <Option value="english">English</Option>

                    </Select>
                </div>
                
            </div> */}
        </div>
    )
}

export default  DataTime 
