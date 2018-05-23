import files from '../files/'

let state = {}

class hymnals {

	constructor () {
		let self = this
		state["defaultHymnal"] = null
		self.deviceReady = false;
		state["currentHymnal"] = false
		files.checkStatus(function (response) {
			function loopCheckStatus (response) {
				if (response === true) {
				  // read file
				 	files.openFile(function (err, data) {
					    if (err) {}
					    data = JSON.parse(data)
						let tmp = data
					    self.hymnals = data.hymnals
					    self.default = data.default
					    let i
					    let languages = []
					    for (i in self.hymnals) {
					      let hymnal = self.hymnals[i]
					      let lang = hymnal.Language
					      languages[lang] = lang
					    }
					    let langs = []
					    for (let i in languages) {
					      langs.push({lang: i, isOpen: false})
					    }
					    self.Languages = langs
						self.deviceReady = true;
						
					}, 'index.json')
					return true
				}				
				// wait for deviceReady
				files.checkStatus(function (response) {
				  setTimeout(function () { loopCheckStatus(response) }, 100)
				})
			}
			loopCheckStatus(response)
		})
	}
	// check if device is ready
	deviceIsReady(callback) {
		let self = this
		function wait() {
			setTimeout(function () { 
				if(self.deviceReady === true) return callback(true)
				wait();
			}, 100)
		}
		wait();
	}

	getHymnals(callback) {
		return callback(this.Languages, this.hymnals, this.default)
	}
	getState() {
		return state
	}
	setState(key, val) {
		state[key]= val
	}
	test() {
		return "working"
	}


}

let hymnalInst = new hymnals()

export default {
	hymnalInst
};