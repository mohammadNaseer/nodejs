const net=require('net');
var client= net.connect({port: 49715},()=>{
	
	console.log("connected ! :)");
	client.write("hi  I am clint \n");

});


client.on('data',(data)=>{
	console.log(data.toString());
	client.end
});
client.on('end',()=>{
	console.log("disconnected ! :( ");
})