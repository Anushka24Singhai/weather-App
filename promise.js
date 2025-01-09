'use strict'

let myPromise = new Promise((resolve,reject) => {
	resolve('Good to go');
});
myPromise.then((res)=>{
	console.log(res);
})