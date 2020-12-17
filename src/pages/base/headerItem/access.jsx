import React from 'react';
import { Modal } from 'antd';
import FormItem from './formItem'

export default class Access extends React.Component {
    constructor(props){
        super(props)
    }
   
    render() {
      return (
        <>
          <Modal
            title="修改密码"
            centered
            visible={this.props.showAccess}
            onOk={() => this.props.showAccesss2Visible(false)}
            onCancel={() => this.props.showAccesss2Visible(false)}
          >
            <FormItem />
          </Modal>
        </>
      );
    }
  }

