import React  from 'react';
import { Table , } from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
));


const columns = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
  },
  {
    title: '从站地址',
    dataIndex: 'slaveId',
    width: '10%',
  },
  {
    title: '功能码',
    dataIndex: 'funcCode',
    width: '19%',
  },
  
    {
      title: '地址',
      dataIndex: 'Addre',
      width: '10%',
    },
    {
      title: '映射地址',
      dataIndex: 'mappinAddre',
      width: '10%',
    },
    {
      title: '状态地址',
      dataIndex: 'statusAddre',
      width: '10%',
    },

    {
      title: '数量',
      dataIndex: 'number',
      width: '9%',
    }, 
    {
        title: '响应超时',
        dataIndex: 'timeout',
        width: '7%',
      },
    {
      title: '周期',
      dataIndex: 'circle',
      width: '7%',
    },
  
  
];

 
const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

export default class SortTable extends React.Component {
 constructor(props){
     super(props)
     console.log('props',props)
     this.state = {
        dataSource: this.props.data,
      };
 }
  
  

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    console.log('dataSource',dataSource)
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  render() {
    const { dataSource } = this.state;

    const DraggableContainer = props => (
      <SortableContainer
        useDragHandle
        helperClass="row-dragging"
        onSortEnd={this.onSortEnd}
        {...props}
      />
    );
    return (
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowKey="index"
        components={{
          body: {
            wrapper: DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      />
    );
  }
}
