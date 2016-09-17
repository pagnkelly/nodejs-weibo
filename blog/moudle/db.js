var  settings=require('../settings'),
    mongdb=require('mongdb'),
     Db=mongdb.db,
    Connection=mongdb.Connection,
    Server=mongdb.Server;
module.exports= new Db(setting.db,new Server(settings.host,Connection.DEFAULT_PORT),{
    safe:true
});