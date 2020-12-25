import React,{ Component ,useState}  from 'react';
import { Table,InputNumber, Popconfirm, Form } from 'antd';
import { Select } from 'antd';

// const originData = [];

const { Option } = Select;


//单元格的格式以及规则的限定
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
 
  const inputNode =inputType === 'funcCode' ? <Select style={{ width: 180 }}>
                                                  <Option value="Read Coils"> Read Coils</Option>
                                                  <Option value="Read Discreate Inputs"> Read Discreate Inputs</Option>
                                                  <Option value="Read Holding Registers"> Read Holding Registers</Option>
                                                  <Option value="Read Input Registers"> Read Input Registers</Option>
                                                  <Option value="Write Coil"> Write Coil</Option>
                                                  <Option value="Write Register"> Write Register</Option>
                                                  <Option value="Write Coils"> Write Coils</Option>
                                                  <Option value="Write Registers"> Write Registers</Option>
                                              </Select> 
                                              :<InputNumber style={{ width: 80 }} />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


//
const EditableTable = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(props.originData);
  const [editingKey, setEditingKey] = useState('');
  

  const isEditing = (record) => record.key === editingKey;


  const edit = (record) => {
    form.setFieldsValue({
        IP:'',
        port:'',
        slaveId:'',
        funcCode:'',
        Addre:'',
        mappinAddre:'',
        statusAddress:'',
        number:'',
        timeout:'',
        ethernet:'',
        circle:'',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };


  //画table
  const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        width: 80,
        editable: false,
      },
      {
        title: 'Server IP',
        dataIndex: 'IP',
        width: 100,
        editable: false,
      },
    {
      title: 'Port',
      dataIndex: 'port',
      width: 100,
      editable: false,
    },
    {
        title: '从站地址',
        dataIndex: 'slaveId',
        width: 100,
        editable: false,
      },
    {
      title: '功能码',
      dataIndex: 'funcCode',
      width: 200,
      editable: true,
    },
    
      {
        title: '起始地址',
        dataIndex: 'Addre',
        width: 100,
        editable: true,
      },
      {
        title: '映射地址',
        dataIndex: 'mappinAddre',
        width: 100,
        editable: true,
      },
      {
        title: '数量',
        dataIndex: 'number',
        width: 100,
        editable: true,
      }, {
        title: '命令状态地址',
        dataIndex: 'statusAddress',
        width: 100,
        editable: true,
      }, 
      {
        title: '响应时间(ms)',
        dataIndex: 'timeout',
        width: 100,
        editable: true,
      },
       {
        title: 'Ethernet',
        dataIndex: 'ethernet',
        width: 100,
        editable: true,
      },
      {
        title: '周期(ms)',
        dataIndex: 'circle',
        width: 80,
        editable: true,
      },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
            //   href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </a>
            <Popconfirm title="取消编辑？" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            编辑
          </a>
        );
      },
    },
  ];


  //循环遍历colums
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
  console.log('inputType: col.dataIndex,',col.dataIndex)
    return {
      ...col,
      onCell: (record) => ({
        record,
        // inputType: col.dataIndex === 'age' ? 'number' : 'text',
        inputType: col.dataIndex,

        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        scroll={{ x: 1400}}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};
  





export default EditableTable;