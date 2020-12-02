import React,{ useState}  from 'react';
import { Table,InputNumber, Popconfirm, Form,Input,Button } from 'antd';
import { Select } from 'antd';


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
 
  const inputNode = (inputType === 'topic' ?<Input /> :(
                    inputType === 'zone' ? <InputNumber /> :(
                    inputType === 'addr'?<InputNumber /> :(
                    inputType === 'size'?<InputNumber /> :(
                    inputType === 'type'?<Select style={{ width: 90 }}>
                                            <Option value="byte">byte</Option>
                                            <Option value="ushort">ushort</Option>
                                            <Option value="uint">uint</Option>
                                            <Option value="float">float</Option>
                                            <Option value="double">double</Option>
                                            <Option value="binary">binary</Option>
                                        </Select> :null))))
                        )

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
const SubscriptTable = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(props.originData);
  const [editingKey, setEditingKey] = useState('');
  

  const isEditing = (record) => record.key === editingKey;


  const edit = (record) => {
    form.setFieldsValue({
      topic:'',
      zone:'',
      addr:'',
      size:'',
      type:'',
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
      width: '10%',
      editable: false,
    },
      {
        title: 'topic',
        dataIndex: 'topic',
        width: '10%',
        editable: true,
      },
      {
        title: '区域',
        dataIndex: 'zone',
        width: '10%',
        editable: true,
      },
      {
        title: 'modbus address',
        dataIndex: 'addr',
        width: '10%',
        editable: true,
      },
      {
        title: 'size',
        dataIndex: 'size',
        width: '10%',
        editable: true,
      },
      {
        title: '内容类型',
        dataIndex: 'type',
        width: '15%',
        editable: true,
      },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
              <Button type="link"
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                保存
                </Button>
                <Popconfirm title="取消编辑？" onConfirm={cancel}>
                  <Button type="text">取消</Button>
                </Popconfirm>
              </span>
              ) : (
              <div>
                  <Button type="link" style={{margin:0}} disabled={editingKey !== ''} onClick={() => edit(record)} >
                  编辑
                </Button>
                <Button type="link" style={{margin:0}} disabled={editingKey !== ''}>
                  添加
                </Button>
                <Button type="link" style={{margin:0}} disabled={editingKey !== ''} danger >
                  删除
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


export default SubscriptTable;

