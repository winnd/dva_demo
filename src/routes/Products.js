import React from 'react';
//d: dva 的 connect 方法可以将组件和数据关联在一起 (d:表示from文档)
import { connect } from 'dva';
import ProductList from '../components/ProductList';

//d: 本组件类型 : Presentational Component 展示形组件
const Products = ({ dispatch, products }) => {      //dispatch是固定参数名 products是model名
  function handleDelete(id) {
    dispatch({                    //调度reducers中的方法
      type: 'products/delete',    //参见model中的reducers.delete
      payload: id,                //传入的参数
    });
  }

  //products 来自index.js 的initialState
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

//语法: (({model})=>(返回的state))(组件)
export default connect(({ products }) => ({ // 匿名函数表返回要订阅的数据 products是model名
  products,                                 // model中返回的state 名字必须与本组件的参数一致
}))(Products);                              // 这是本组件, 参数是model中返回的state

/* 另一种写法
function mapStateToProps(state) {
  return {...state.data};
}
export default connect(mapStateToProps)(MyComponent);
*/

