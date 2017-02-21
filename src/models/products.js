import dva from 'dva';

export default {
  namespace: 'products',      //代表model的namespace
  state: [],                  //这里是空 但实际数据是index.js中initState初始化的数据
  //reducer 是一个函数，接受 state 和 action，返回老的或新的 state 。即：(state, action) => state
  reducers: {                 //等同于 redux 里的 reducer，接收 action，同步更新 state
    'delete'(state, { payload: id }) {              //②payload是固定名称, id是别名 state是本类中的state https://github.com/dvajs/dva-knowledgemap#析构赋值
      return state.filter(item => item.id !== id);  //数据处理
    },
  },
};