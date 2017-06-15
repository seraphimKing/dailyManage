var mysql=require('mysql');

function connectServer(){
     client=mysql.createConnection({
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'test2'
    })
    return client;
}
/*选出所有clerk表中的数据*/
function  selectAll(callback){
    //client为一个mysql连接对象
    client.query('select * from clerk',function(err,results,fields){
        if(err) throw err;
        callback(results);
    });
}
exports.connect = connectServer;
exports.selectAll = selectAll;
