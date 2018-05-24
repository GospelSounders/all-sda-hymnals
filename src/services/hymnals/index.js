import files from '../files/'

class hymnals {

	constructor () {
		let self = this
		self.deviceReady = false;
		self.currentHymnal = {}
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
		return callback(this.Languages, this.hymnals, this.default, this.currentHymnal)
	}

	gotoNumberinCurrentHymnal(pos, fixedNumber, callback){
		let self = this;
		let hymnNumber
		let currentNumber = self.currentHymnal.hymnNumber
		switch(pos) { 
			case "next":
				hymnNumber = self.currentHymnal.hymnNumber + 1
				break;
			case "prev":
				hymnNumber = self.currentHymnal.hymnNumber - 1
				break;
			case "this":
				hymnNumber = fixedNumber
			default:
				hymnNumber = self.currentHymnal.hymnNumber
		}

		self.currentHymnal.hymnNumber = hymnNumber
		self.loadSongWords(function(){
			if(self.currentHymnal.hymnNumber !== hymnNumber){
				self.currentHymnal.hymnNumber = currentNumber
				self.loadSongWords(function(){
					return callback(self.currentHymnal)
				})
			} else {
				return callback(self.currentHymnal)
			}
		})

	}

	loadSongWords(callback) {
		let self = this
		if(self.currentHymnal.hymnNumber === 0) {
			self.currentHymnal.text = "Hymn still not available"
		}
		let path = self.currentHymnal.path
		files.openFile(function (err, data) {
			try{
		    if (err) {self.setNavigation(); return callback()}
		    data = JSON.parse(data)				
				self.currentHymnal.text = data.songs[self.currentHymnal.hymnNumber] || "Hymn still not available"
				self.currentHymnal.NumSongs = data.NumSongs
				self.currentHymnal.otherHymnals = data.songs[self.currentHymnal.hymnNumber].otherHymnals
				self.setNavigation()
				return callback();
			}catch(f){
				self.setNavigation()
				return callback()
			}
		}, path+'/index.json')
	}

	setNavigation() {
		let self = this
		if(self.currentHymnal.hymnNumber >= self.currentHymnal.NumSongs){
			self.currentHymnal.canGoNext = false
			self.currentHymnal.canGoBack = true
			self.currentHymnal.Dialpad = false
			self.currentHymnal.hymnNumber = self.currentHymnal.NumSongs
		} else {
			self.currentHymnal.canGoNext = true
			self.currentHymnal.canGoBack = true
			self.currentHymnal.Dialpad = false
		}
		if(self.currentHymnal.hymnNumber === 0) {
			self.currentHymnal.canGoNext = true
			self.currentHymnal.canGoBack = false
			self.currentHymnal.Dialpad = true
		}

		if(self.currentHymnal.hymnNumber < 0 || self.currentHymnal.hymnNumber >  self.currentHymnal.NumSongs)
			self.currentHymnal.hymnNumber = 0
	}

	gotoHymnal(whichHymnal, callback) {
		let self = this
		try{
		let toHymnal = self.hymnals[parseInt(whichHymnal)]
		let prevHymnal = self.currentHymnal
		self.currentHymnal = toHymnal
		// Add hymnNumber
		try{
			self.currentHymnal.hymnNumber = prevHymnal.otherHymnals[self.currentHymnal.id] || 0
		}catch(f){}
		self.currentHymnal.hymnNumber = self.currentHymnal.hymnNumber || 0
		self.currentHymnal.Dialpad = false
		self.setNavigation()

		self.loadSongWords(function(){
			return callback(self.currentHymnal)
		})
		}catch(e){}
	}

	gotoHymn() {
	}
}

let hymnalInst = new hymnals()

export default {
	hymnalInst
};
