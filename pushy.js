
//get request module
var request=require('request');

//get device registration ids,api key and data 
var pushy=function(apikey,registrationIds,data,callback)
{

request.post("https://pushy.me/push?api_key="+apikey,{
headers: {
"Content-Type": "application/json",
"Connection": "close"
},                
json:{
"registration_ids" : registrationIds,
"data" : data
}
  }
  ,function(error,response,body){
  if(!error)
  {
 callback(body);        
  }
 else{
  callback(error);
   }
 });

};

module.exports=pushy;
