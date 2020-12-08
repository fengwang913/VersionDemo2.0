import React  from 'react';
import { Table , } from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
));

const data = [
    {
        key: '0',
        zoneType: '1',
        address: '156',
        length: '12',
        dataType:'int',
        byte:'12',
        index: 0,
    },
    {
        key: '1',
        zoneType: '1',
        address: '156',
        length: '12',
        dataType:'int',
        byte:'12',
        index: 1,
    },
    {
        key: '3',
        zoneType: '1',
        address: '156',
        length: '12',
        dataType:'int',
        byte:'12',
        index: 2,
    },
  ];

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
    className: 'drag-visible',
    width: '10%',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },

  {
    title: '长度',
    dataIndex: 'length',
  },
  {
    title: '数据类型',
    dataIndex: 'dataType',
  },
  {
    title: '字节序',
    dataIndex: 'byte',
  },
];


 
const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

export default class DemoTable extends React.Component {
  state = {
    dataSource: data,
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
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
