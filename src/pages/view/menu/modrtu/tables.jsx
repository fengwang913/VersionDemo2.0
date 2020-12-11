import React,{ useState}  from 'react';
import { Table,InputNumber, Popconfirm, Form } from 'antd';
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
 
  const inputNode =inputType === 'funcCode' ? <Select style={{ width: 160 }}>
                                                  <Option value="Read Coils"> Read Coils</Option>
                                                  <Option value="Read Discreate Inputs"> Read Discreate Inputs</Option>
                                                  <Option value="Read Holding Registers"> Read Holding Registers</Option>
                                                  <Option value="Read Input Registers"> Read Input Registers</Option>
                                                  <Option value="Write Coil"> Write Coil</Option>
                                                  <Option value="Write Register"> Write Register</Option>
                                                  <Option value="Write Coils"> Write Coils</Option>
                                                  <Option value="Write Registers"> Write Registers</Option>
                                              </Select> 
                                              :<InputNumber style={{ width: 50 }}/>;

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



const EditableTable = (props) => {
  const [form] = Form.useForm();


  const [data, setData] = useState(props.originData);
  const [editingKey, setEditingKey] = useState('');


  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      index:'',
      slaveId:'',
      funcCode:'',
      Addre:'',
      mappinAddre:'',
      statusAddre:'',
      number:'',
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
        width: '8%',
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
        width: '8%',
        editable: true,
      },

      {
        title: '数量',
        dataIndex: 'number',
        width: '5%',
        editable: true,
      }, 
      {
        title: '响应超时',
        dataIndex: 'timeout',
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
          <div>
              <a disabled={editingKey !== ''} onClick={() => edit(record)}>
              编辑
            </a>
            <a disabled={editingKey !== ''} style={{marginLeft:'15px',marginRight:'15px'}} >
              添加
            </a>
            <a disabled={editingKey !== ''} style={{color:'red'}} >
              删除
            </a>
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
        style={{paddingBottom:'20px'}}
      />
    </Form>
  );
};


export default EditableTable;