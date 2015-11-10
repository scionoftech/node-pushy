var pushy=require('./pushy');

//device registrationIds
var registrationIds= [];
registrationIds.push('');

//data in push notification
var data={"message":{"from":"sai", "msg":"hi"}};

//api key from pushy
var apikey='';

//pass values to pushy
pushy(apikey,registrationIds,data,function(response){

console.log(response);


});