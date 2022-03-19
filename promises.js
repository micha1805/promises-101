const testPromise = () => {

	return new Promise((resolve, reject)=> {

		// We wait 1 second before asking resolve or reject
		// Meanwhile the Promise is by definition pending
		setTimeout(()=>{

			const a = prompt('ok for resolve, anything else for reject', 'ok');

			if (a === 'ok'){
				resolve('The Promise is fullfilled')
			}else {
				reject('The Promise is rejected')
			}

		}, 1000)

	})

};

///////////////////////////////////////////////////

const myPromise = testPromise()

myPromise
.then((msg)=> {
	console.log("%c'myPromise' is fullfilled 👍", 'color: green; font-weight:bold')
	console.log("(then) State of 'myPromise' :'", myPromise)
	console.log("Message: ", msg)
})
.catch((err)=> {
	console.log("%c'myPromise' is rejected 🛑", 'color:red; font-weight:bold')
	console.log("(catch) State of 'myPromise' :'", myPromise)
	console.log("Error message: ", err)
})

// Before we answer the prompt, the Promise will be
// pending by definition :
console.log("(pending) State of 'myPromise' : ", myPromise)
