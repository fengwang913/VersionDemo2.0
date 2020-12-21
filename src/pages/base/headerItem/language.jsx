import React from 'react';
import { Modal } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

export default class Language extends React.Component {
    constructor(props){
        super(props)
    }
   
    render() {
      return (
        <>
          <Modal
            title="选择语言"
            centered
            visible={this.props.languageFlag}
            onOk={() => this.props.language2Visible(false)}
            onCancel={() => this.props.language2Visible(false)}
          >
            <div>
                    <Select
                        showSearch
                        style={{ width: 200 ,marginLeft:'130px'}}
                        placeholder="简体中文"
                        optionFilterProp="children"
                        onChange={this.props.onChange}
                        onFocus={this.props.onFocus}
                        onBlur={this.props.onBlur}
                        onSearch={this.props.onSearch}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="chinese">简体中文</Option>
                        <Option value="english">English</Option>

                    </Select>
                </div>
          </Modal>
        </>
      );
    }
  }

