import React,{ useState}  from 'react';
import { Table, Popconfirm, Form, Input ,InputNumber,Button  } from 'antd';
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
 
  const inputNode =  (inputType === 'IP'? <Select style={{ width: 90 }}>
                                                <Option value="IP"> IP</Option>
                                                <Option value="DNS"> DNS</Option>
                                          </Select>:(
                      inputType === 'port' ? <InputNumber 
                                                style={{ width: 50 }}/> :(
                      inputType === 'ClientID' ? <Input 
                                                style={{ width: 60 }} /> :(
                      inputType === 'ConnectTimeout' ? <Input 
                                                style={{ width: 50 }}/> :(
                      inputType === 'KeepAliveInterval' ? <InputNumber 
                                                style={{ width: 70 }}/> :(
                      inputType === 'UserName' ? <Input
                                                style={{ width: 60 }}/> :(
                      inputType === 'UserPassword' ? <Input 
                                                style={{ width: 60 }}/> :(
                      inputType === 'TLS' ? <Select style={{ width: 90 }}>
                                                <Option value="使能"> 使能</Option>
                                                <Option value="不使能">不使能</Option>
                                            </Select> :( 
                      inputType === 'Connection' ? <Input 
                                                style={{ width: 60 }} /> :
                                              null)
                                    ))))))))
                   


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
const BrokerTab = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(props.originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
        IP:'',
        port:'',
        ClientID:'',
        ConnectTimeoutMask:'',
        KeepAliveInterval:'',
        UserName:'',
        UserPassword:'',
        TLS:'',
        Connection:'',
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
        title: 'IP地址或DNS',
        dataIndex: 'IP',
        width: '10%',
        editable: true,
      },
    {
      title: '端口号',
      dataIndex: 'port',
      width: '10%',
      editable: true,
    },
    {
      title: 'Client ID',
      dataIndex: 'ClientID',
      width: '10%',
      editable: true,
    },
    {
        title: 'Connect Timeout',
        dataIndex: 'ConnectTimeout',
        width: '10%',
        editable: true,
      },
      {
        title: 'Keep Alive Interval',
        dataIndex: 'KeepAliveInterval',
        width: '10%',
        editable: true,
      },
      {
        title: '用户名',
        dataIndex: 'UserName',
        width: '10%',
        editable: true,
      },
      {
        title: '用户密码',
        dataIndex: 'UserPassword',
        width: '10%',
        editable: true,
      },
      {
        title: 'TLS 使能',
        dataIndex: 'TLS',
        width: '10%',
        editable: true,
      },
      {
        title: 'Connection Status Address',
        dataIndex: 'Connection',
        width: '10%',
        editable: true,
      },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              onClick={() => save(record.key)}
              type="link"
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type="text" >取消</Button>
            </Popconfirm>
          </span>
        ) : (
          <div>
          <Button type="link" disabled={editingKey !== ''} onClick={() => edit(record)}>
          编辑
        </Button>
     </div>
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
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};


export default BrokerTab;
