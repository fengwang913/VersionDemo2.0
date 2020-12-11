import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form ,Select} from 'antd';
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
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    editable,
    handleSave,
    ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const funcCodeRef = useRef();

  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      if(dataIndex === 'funcCode'){
        funcCodeRef.current.focus();
    }else{
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
    childNode = editing ? (
     (dataIndex === 'funcCode'? 
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
        <Select ref={funcCodeRef} onPressEnter={save} onBlur={save}>
                <Option value="Read Coils"> Read Coils</Option>
                <Option value="Read Discreate Inputs"> Read Discreate Inputs</Option>
                <Option value="Read Holding Registers"> Read Holding Registers</Option>
                <Option value="Read Input Registers"> Read Input Registers</Option>
                <Option value="Write Coil"> Write Coil</Option>
                <Option value="Write Register"> Write Register</Option>
                <Option value="Write Coils"> Write Coils</Option>
                <Option value="Write Registers"> Write Registers</Option>
        </Select>
   </Form.Item>
     : <Form.Item
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
     <Input ref={inputRef} onPressEnter={save} onBlur={save} />
   </Form.Item> )
     
    ) : (
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

class RtuTable extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
        {
            title: '序号',
            dataIndex: 'index',
            width: '5%',
            editable: false,
          },
          {
            title: '从站地址',
            dataIndex: 'slaveId',
            width: '10%',
            editable: true,
          },
          {
            title: '功能码',
            dataIndex: 'funcCode',
            width: '19%',
            editable: true,
          },
          
            {
              title: '地址',
              dataIndex: 'Addre',
              width: '10%',
              editable: true,
            },
            {
              title: '映射地址',
              dataIndex: 'mappinAddre',
              width: '10%',
              editable: true,
            },
            {
              title: '状态地址',
              dataIndex: 'statusAddre',
              width: '10%',
              editable: true,
            },
      
            {
              title: '数量',
              dataIndex: 'number',
              width: '9%',
              editable: true,
            }, 
            {
              title: '周期',
              dataIndex: 'circle',
              width: '7%',
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
      dataSource: props.originData,
      count: props.originData.length,
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
      index:count,
      funcCode:'Read Input Registers',
      slaveId:'12',
      Addre:'56',
      mappinAddre:'6',
      statusAddre:'12',
      number:'12',
      circle:'3',
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
          Add a row
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


export default RtuTable;