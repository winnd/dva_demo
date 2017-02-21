import React, { PropTypes } from 'react';
import { Table, Popconfirm, Button } from 'antd';

 /*
  * onDelete	: 回调函数
  * products	: 数据
  */
const ProductList = ({ onDelete, products }) => {
  //结构化数据,以填充到<table />中
  const columns = [{  
    title: 'Name',        //<table /> 格式
    dataIndex: 'name',    //<table /> 格式
  }, {
    title: 'Actions',
    render: (text, record) => {         //<table> 中自定义一格
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table dataSource={products} columns={columns} />
  );
};

//react中自带的类型检查 (定义参数类型)
ProductList.propTypes = {					//本函数的参数约束
  onDelete: PropTypes.func.isRequired,    //表本参数为必要
  products: PropTypes.array.isRequired,   //表本参数为必要
};

export default ProductList;
