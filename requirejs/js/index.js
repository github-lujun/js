require.config({
    baseUrl:'js/other',
    paths:{
        'jquery':'https://cdn.staticfile.org/jquery/2.0.0/jquery.min',
    },
    shim:{
        un:{
            deps:[],
            exports:'obj'//与暴露出全局变量的名称一致
        }
    }
})

require(['jquery','say','un'],function($,say,u){
    console.log(u==null);
    console.log(u.unName);
    console.log($.name);
})