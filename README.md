[![pushy-notify Logo](https://github.com/scionoftech/pushy-notify/blob/Development/pushy-notify.png)](https://www.npmjs.com/package/pushy-notify)

[pushy-notify v1.0.0](https://www.npmjs.com/package/pushy-notify)

A small [node.js](http://nodejs.org) library for push notifications using pushy. for more info visit [pushy](https://pushy.me)

## How to use

```js

var pushy=require('pushy-notify');

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

```

## Installation

```bash
npm install pushy-notify
```

# license
MIT

