 let obj={
     data:[{
        name:'首页',
        key:'0',
        path:'/admin/home',
    },
    {
        name:'商品管理',
        key:'1',
        path:'/admin/food',
     },
     {
      name:'广告位管理',
      key:'2',
      path:'/admin/banner'
   },

   {
      name:'购物车管理',
      key:'3',
      path:'/admin/cart',
   },
    {
        name:'数据统计',
        key:'4', 
        path:'/admin/echarts',
        children:[
           {
            name:'饼型统计',
            key:'4-0', 
            path:'/admin/echarts/pie',
           },
           {
            name:'折线统计',
            key:'4-1', 
            path:'/admin/echarts/line',
           }
        ]
     },
     {
      name:'用户管理',
      key:'5',
      path:'/admin/user',
   }
       
    
    ]
 }
 
export default  obj