import React,{ Component ,useState}  from 'react';
import { Table, Popconfirm, Form ,Button } from 'antd';
import { Input  } from 'antd';


// const { Option } = Select;
//原始数据而已
  const originData = [];
  originData.push({
      key:'01',
      ID:'1',
      IP:'255.255.255.255',
      Gateway:'2',
      Mask:'1',
      dns:'255.255.255.255',
  },{
    key:'02',
    ID:'2',
    IP:'255.255.255.255',
    Gateway:'2',
    Mask:'1',
    dns:'255.255.255.255',

},
)



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
 
  const inputNode =  <Input  />
                   


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



const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
        ID:'',
        IP:'',
        Gateway:'',
        Mask:'',
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
        title: '网口',
        dataIndex: 'ID',
        width: '15%',
        editable: false,
      },
    {
      title: 'IP',
      dataIndex: 'IP',
      width: '20%',
      editable: true,

    },
    {
      title: 'Gateway',
      dataIndex: 'Gateway',
      width: '15%',
      editable: true,

    },
    {
        title: 'Mask',
        dataIndex: 'Mask',
        width: '15%',
        editable: true,
      },
      {
        title: 'DNS服务器地址',
        dataIndex: 'dns',
        width: '20%',
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
              type="link"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type="text">取消</Button>
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


export default class NetworkCon extends Component{
    constructor(props){
        super(props)

    }
    render(){

        return(
            <EditableTable />
        )
    }

    
}