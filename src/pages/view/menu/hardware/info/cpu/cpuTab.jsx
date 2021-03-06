import React,{ useState ,useEffect }  from 'react';
import { Table,InputNumber, Popconfirm, Form ,Button} from 'antd';
import { Select } from 'antd';
// import Info from '../info';


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
                                              :<InputNumber />;

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
const CpuTable = (props) => {
  const [form] = Form.useForm();
  const info = props.info;
  const [data, setData] = useState(props.info);
  console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',info)
  const [editingKey, setEditingKey] = useState('');

  useEffect(() =>{

      setData(info)
  })
  

  const isEditing = (record) => record.key === editingKey;

  console.log('此时的editingKey是多少呢？',editingKey)

  const edit = (record) => {
    form.setFieldsValue({
        index:'',
        num:'',
        // time:'',
        // type:'',
        SOE:'',
        // SOERange:'',
        // SOEUpper:'',
        // SOELower:'',
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
      dataIndex:'index',
      width: '10%',
      editable: false,
    },
    {
        title: '通道类型',
        dataIndex:'type',
        width: '15%',
        editable: true,
      },
      // {
      //   title: '滤波次数',
      //   dataIndex:'num',
      //   width: '10%',
      //   editable: true,
      // },
      {
        title: '滤波时间(ms)',
        dataIndex:'time',
        width: '15%',
        editable: true,
      },
    {
      title: 'SOE事件',
      dataIndex:'SOE',
      width: '25%',
      editable: true,
    },
    
    //   {
    //     title: 'SOE滞回区间',
    //     dataIndex:'SOERange',
    //     width: '15%',
    //     editable: true,
    //   },
    //   {
    //     title: 'SOE上限',
    //     dataIndex:'SOEUpper',
    //     width: '15%',
    //     editable: true,
    //   },
    //   {
    //     title: 'SOE下限',
    //     dataIndex:'SOELower',
    //     width: '15%',
    //     editable: true,
    //   },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              type='link'
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Button>
            <Popconfirm title="取消编辑？" onConfirm={cancel}>
              <Button type='text'>取消</Button>
            </Popconfirm>
          </span>
        ) : (
          <div>
             <Button  type='link' disabled={editingKey !== ''} onClick={() => edit(record)}>
              编辑
            </Button>
            <Button type='link' disabled={editingKey !== ''}  >
              添加
            </Button>
            <Button type='text' disabled={editingKey !== ''}   danger>
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
        croll={{y:'true'}}
      />
    </Form>
  );
};


export default CpuTable;



