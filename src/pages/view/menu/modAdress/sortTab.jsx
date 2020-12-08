import React  from 'react';
import { Table , Popconfirm , } from 'antd';
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
    // function findIndex base on Table rowKey props and should always be a right array index
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
