import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form ,Select  } from 'antd';
const EditableContext = React.createContext();
const { Option } = Select;
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const zoneSelectRef = useRef();
  const typeSelectRef = useRef();
  const byteSelectRef = useRef();
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      console.log('dataIndex',dataIndex)
      if(dataIndex === 'zoneType'){
          zoneSelectRef.current.focus();
      }
      if(dataIndex === 'dataType'){
        typeSelectRef.current.focus();
      }
      if(dataIndex === 'byte'){
        byteSelectRef.current.focus();
      }if(dataIndex=== 'address' || dataIndex === 'length'){
        inputRef.current.focus();
      }
     
       
    
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
      console.log('dataIndex dataIndex',dataIndex,dataIndex === 'zoneType')
    childNode = editing ? (
        (dataIndex === 'zoneType'?(
            <Form.Item
            style={{
              margin: 0,
            }}
            name={dataIndex}
            rules={[
              {
                required: true,
                message: `${title} is required.`,
              },
            ]}
          >
            <Select ref={zoneSelectRef} onPressEnter={save} onBlur={save}>
                        <Option value='0'>0</Option>
                        <Option value='1'>1</Option>
                        <Option value='3'>3</Option>
                        <Option value='4'>4</Option>
                    </Select>
          </Form.Item>
    
        )
    :(dataIndex === 'dataType' ?(<Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Select ref={typeSelectRef} onPressEnter={save} onBlur={save}>
                    <Option value='byte'>byte</Option>
                    <Option value='short'>short</Option>
                    <Option value='ushort'>ushort</Option>
                    <Option value='int'>int</Option>
                    <Option value='uint'>uint</Option>
                    <Option value='float'>float</Option>
                    <Option value='double'>double</Option>
                </Select>
      </Form.Item>):(
          dataIndex === 'byte'?(<Form.Item
            style={{
              margin: 0,
            }}
            name={dataIndex}
            rules={[
              {
                required: true,
                message: `${title} is required.`,
              },
            ]}
          >
            <Select ref={byteSelectRef} onPressEnter={save} onBlur={save}>
                        <Option value='defaut'>defaut</Option>
                        <Option value='12'>12</Option>
                        <Option value='21'>21</Option>
                        <Option value='1234'>1234</Option>
                        <Option value='4321'>4321</Option>
                        <Option value='3421'>3421</Option>
                        <Option value='2143'>2143</Option>
                    </Select>
          </Form.Item>):
      <Input ref={inputRef} onPressEnter={save} onBlur={save} />)))) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default class ModbusTab extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '区域类型',
        dataIndex: 'zoneType',
        width: '10%',
        editable: true,
      },
      {
        title: '地址',
        dataIndex: 'address',
        editable: true,
      },

      {
        title: '长度',
        dataIndex: 'length',
        editable: true,
      },
      {
        title: '数据类型',
        dataIndex: 'dataType',
        editable: true,
      },
      {
        title: '字节序',
        dataIndex: 'byte',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          zoneType: '1',
          address: '156',
          length: 'byte',
          dataType:'123',
          byte:'12',

        },
        {
          key: '1',
          zoneType: '0',
          address: '32',
          length: 'short',
          dataType:'123',
          byte:'21',
        },
        {
            key: '2',
            zoneType: '3',
            address: '102',
            length: 'ushort',
            dataType:'123',
            byte:'1234',
          },
          {
            key: '3',
            zoneType: '4',
            address: '101',
            length: 'int',
            dataType:'123',
            byte:'4321',
          },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      zoneType: `0`,
      address: `${count}`,
      length:'234',
      dataType:'byte',
      byte:'12',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          添加
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          style={{paddingBottom:'20px'}}
 
        />
      </div>
    );
  }
}


