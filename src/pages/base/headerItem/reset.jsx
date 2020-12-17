import React from 'react';
import { Modal } from 'antd';

export default class Reset extends React.Component {
    constructor(props){
        super(props)
    }
   
    render() {
      return (
        <>
          <Modal
            title="Warning"
            centered
            visible={this.props.resetFlag}
            onOk={() => this.props.resetOk()}
            onCancel={() => this.props.resetFlag2Visible()}
          >
            <p>确定重置？</p>
          </Modal>
        </>
      );
    }
  }

