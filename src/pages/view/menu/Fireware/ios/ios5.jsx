import React,{ Component }  from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent => `${parseFloat(percent.toFixed(2))}%`,
  },
};

export default class IOS5 extends Component{
    render(){

        return(
            <div style={{width:'49%',backgroundColor:'white'}}>
                <div  style={{width:'35vw',
                              fontSize:'18px',
                              border:'1px solid #eee',
                              marginTop:'20px',
                              padding:'10px'}}>
                    IOS3
                    <div style={{fontSize:'14px'}}>
                      目前IOS3的版本信息为xxxxxxx
                    </div>
                    <div style={{marginTop:'14px',display:'flex'}}>
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                        <Button style={{marginLeft:'15px'}}>上传</Button>
                    </div>
                </div>
            </div>
        )
    }

}