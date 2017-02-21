import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState:{
        products:[
            {name:'dva',id:1},
            {name:'antd',id:2},
        ],
    },
});


// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

// 流程
// 注册Router表(router.js) -> 写路由文件 (/routes/Users.jsx)
//  -> 写model (/model/users.js) (记得在index.js中注册)
//  -> model的subscriptions 中, dispatch触发effects
//   ① effects中执行ajax查询 -> services(/services/users.js)
//     -> service -> request(/utils/request)
//     -> return data (返回到model中)
//   ② effect 继续触发 reducers中方法
// model return state
// 页面根据state更新

//文件顺序
//Router表->(/routes/Users.jsx)->(/model/users.js)->(/services/users.js)->(/utils/request)
//                                                                                |
//                                                   更新页面 <- (/model/users.js)<-
