import files from '../files/'
import connection from '../connection/'
import axios from 'axios'
import * as JsSearch from 'js-search';

class hymnals {

	constructor () {
		let self = this
		self.deviceReady = false;
		self.currentHymnal = {}
		let monitor = false
		files.checkStatus(function (response) {
			function loopCheckStatus (response) {
				if (response === true) {
					monitor = true
					self.checkHymnalsDb(function(){
						self.Languages = self.Languages_d
						self.hymnals = self.hymnals_d
						self.default = self.default_d
						self.deviceReady = true;
						return true
					})
				}				
				if(monitor === true){
					return true;
				}
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

	getHymnals_d(callback) {
		return callback(this.Languages_d, this.hymnals_d, this.default_d)
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
				break;
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
		// alert("inside path");
		files.openFile(function (err, data) {
			try{
		    if (err) {self.setNavigation(); return callback()}
		    data = JSON.parse(data)				
				self.currentHymnal.text = data.songs[self.currentHymnal.hymnNumber] || "Hymn still not available"
				self.currentHymnal.NumSongs = data.NumSongs

				files.openFile(function (err, datas) {
					if(err);
					try{
					datas = JSON.parse(datas)	

					let search = new JsSearch.Search(self.currentHymnal.shortname);

					let zTmp = [];
					for(let i in datas) {
						let tmp = {};
						tmp[i] = datas[i]
						
						for(let k in tmp[i]){
							tmp[i][k]= tmp[i][k].toString() 
						}
						search.addIndex([i.toString() ,self.currentHymnal.shortname])
						zTmp.push(tmp);
						
					}
					// alert(JSON.stringify(zTmp))
					search.addDocuments(zTmp);

					let results = search.search(self.currentHymnal.hymnNumber.toString());    
					let ret = {}
					results = results[0] || []
					// alert(JSON.stringify(results))
					for(let i in results){
						// just a single row
						results = results[i]
						// alert(JSON.stringify(results))
						let j = 0;
						for(let k in results) {
							ret[j++] = parseInt(results[k])
						}
					}
					// alert(JSON.stringify(ret))
					self.currentHymnal.otherHymnals = ret;
					self.setNavigation()
					return callback();
					}catch(err){
						self.setNavigation()
						return callback();
					}
				
				}, 'allhymns.json')
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
		}catch(f){
			self.currentHymnal.hymnNumber = 0
		}
		self.currentHymnal.hymnNumber = self.currentHymnal.hymnNumber || 0
		self.currentHymnal.Dialpad = false
		self.setNavigation()

		self.loadSongWords(function(){
			return callback(self.currentHymnal)
		})
		}catch(e){
			alert(e)
		}
	}

	typeNumber(typedNumber, callback) { 
		try{
		let self = this
		self.typedNumber = self.typedNumber || 0
		if(self.typedNumber === 0)self.typedNumber += typedNumber
		else self.typedNumber = self.typedNumber.toString() + typedNumber.toString()

		self.typedNumber = parseInt(self.typedNumber)
		// check that number is still smaller than
		let currentHymnal = self.currentHymnal.id
		self.currentHymnal.Dialpad = true
		if(currentHymnal === undefined) {
			self.gotoHymnal(self.default, function(){
				// reject last digit if number is greater than Numsongs
				if(self.typedNumber > self.currentHymnal.NumSongs) {
					let tmp = []
					self.typedNumber = self.typedNumber.toString()
					let i
					for(i in self.typedNumber)tmp.push(self.typedNumber[i])
					tmp.pop()
					tmp = tmp.join('')
					self.typedNumber = tmp
				}
				return callback(self.currentHymnal)
			})
		} 
		// reject last digit if number is greater than Numsongs
		if(self.typedNumber > self.currentHymnal.NumSongs) {
			let tmp = []
			self.typedNumber = self.typedNumber.toString()
			let i
			for(i in self.typedNumber)tmp.push(self.typedNumber[i])
			tmp.pop()
			tmp = tmp.join('')
			self.typedNumber = tmp

		}
		self.typedNumber = parseInt(self.typedNumber) || 0 
		// if number of digits is equal to digits in last hymn, goto hymn
		let numdigits = self.typedNumber.toString().length
		let maxnumdigits = self.currentHymnal.NumSongs.toString().length
		if(numdigits === maxnumdigits) {
			self.gotoNumberinCurrentHymnal("this", parseInt(self.typedNumber), function(){
				self.currentHymnal.hymnNumber = self.typedNumber
				self.currentHymnal.Dialpad = false
				return callback(self.currentHymnal)
			})
		}else callback(self.currentHymnal)		
		}catch(e){}
	}

	gettypedNumber() {
		return this.typedNumber
	}

	getcurrentHymnal() {
		return this.currentHymnal
	}

	resettypedNumber() {
		this.typedNumber = null;
	}
	backspaceTypedNumber() {
		let self = this
		let tmp = []
		self.typedNumber = self.typedNumber.toString()
		let i
		for(i in self.typedNumber)tmp.push(self.typedNumber[i])
		tmp.pop()
		tmp = tmp.join('')
		self.typedNumber = parseInt(tmp) || null
	}

	arrangeSingleSongWords(words) {
		let wordsArr
		if(typeof words === 'string') return words
		try {
			wordsArr = words
			let title = wordsArr.title
			let stanzas = wordsArr.stanzas
			let choruses = wordsArr.choruses
			let songOrder = wordsArr.order
			let author = wordsArr.author || ''
			let key = wordsArr.key || ''
			let tmp, i;
			tmp = []
			for (i in stanzas)tmp.push(i+'  '+stanzas[i])
			stanzas = tmp
			tmp = []
			if(Object.keys(choruses).length === 1) {	//a single chorus
				for (i in stanzas) {
					tmp.push(stanzas[i])
					tmp.push(choruses[0] || choruses[1])
				}
				stanzas = tmp
			}
			return {"text":stanzas.join('\n\r\n\r') + '\n\r\n\r',
				title,
				author,
				key
				}

			//adding choruses
		}
		catch(e){
			return words
		}
	}

	checkOnlinedb(callback) {
		if(connection.checkConnection() === 'none') {
			return callback(true)
		}
		let self = this
		// alert('Checking online')
		axios
		  .get('https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/index.json')
		  .then(function(response){
		  	let data = response.data
		  	try{
		  		// alert('loaded...')
		  		// alert(data)
		  		data = JSON.parse(data)
		  	}catch(e){
		  		data = data
		  	}

		  	let i
		  	self.hymnals_d = data.hymnals
		    self.default_d = data.default
		    self.Interval = data.Interval
		  	files.openFile(function (err, datas) {
				try{
			    	if (err) {return callback(true)}
			    	else {
			    		datas = JSON.parse(datas)	
			    		for (i in self.hymnals_d) {
				    		let hymnal = self.hymnals_d[i]
				    		let id = hymnal.id
			      			self.hymnals_d[i].isDownloaded = datas.includes(parseInt(id))
			      		}
			    	}			
				}catch(f){				}
				let languages = []
			    for (i in self.hymnals_d) {
			      let hymnal = self.hymnals_d[i]
			      let lang = hymnal.Language
			      languages[lang] = lang
			    }
			    let langs = []
			    for (let i in languages) {
			      langs.push({lang: i, isOpen: false})
			    }
			    self.Languages_d = langs
			  	return callback();
			}, 'downloaded.json')
		 }).catch(function(){return callback(true)})
	}

	getInterval() {
		return this.Interval
	}

	checklocalDb(callback){
		let self = this
		files.openFile(function (err, data) {
		    if (err) {}
		    data = JSON.parse(data)
			let tmp = data
		    self.hymnals_d = data.hymnals
		    self.default_d = data.default
		    self.Interval = data.Interval
		    let i
		    files.openFile(function (err, datas) {
				try{
			    	if (err) {return callback(true)}
			    	else {
			    		datas = JSON.parse(datas)	
			    		for (i in self.hymnals_d) {
				    		let hymnal = self.hymnals_d[i]
				    		let id = hymnal.id
			      			self.hymnals_d[i].isDownloaded = datas.includes(parseInt(id))
			      		}
			    	}			
				}catch(f){}
				let languages = []
			    for (i in self.hymnals_d) {
			      let hymnal = self.hymnals_d[i]
			      let lang = hymnal.Language
			      languages[lang] = lang
			    }
			    let langs = []
			    for (let i in languages) {
			      langs.push({lang: i, isOpen: false})
			    }
			    self.Languages_d = langs
			  	return callback();
			}, 'downloaded.json')
			
		}, 'index.json')
	}

	checkHymnalsDb(callback) {
		let self = this
		self.checkOnlinedb(function(err){
			if(err){
				self.checklocalDb(function(){
					return callback();
				})
			}else
			return callback();
		})
	}

	actuallyUpdateHymnals(callback) {
		let self = this
  		let i, hymnals, hymnals_tmp, localHymnals, onlineHymnals, compareHymnals
  		let gitroot = 'https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/'
  		self.checkOnlinedb(function(err){
			if(err){
				return callback(true);
			}
			onlineHymnals = self.hymnals_d
			self.checklocalDb(function(){
				localHymnals = self.hymnals_d
				compareHymnals = []

		    async function longfunc(hymnal) {
		    	let path = hymnal.path
					let localpath = path+'/index.json'
					path = gitroot+localpath
		    	await axios
					.get(path)
					.then(function(response){
						let data = response.data
						files.createDirectory(function(err){
							if(err){
							}
							else
							files.writeFile(function(){
								// update also index.json
								files.openFile(function (err, datas) {
									datas = JSON.parse(datas)
									let k
									let saveHymnals = datas.hymnals
									for(k in saveHymnals){
										if(saveHymnals[k].id === hymnal.id){
											saveHymnals[k].DoneSongs = onlineHymnals[j].DoneSongs
											saveHymnals[k].Fixed = onlineHymnals[j].Fixed
										}
									}
									files.writeFile(function(){
										return true
									},JSON.stringify(saveHymnals),'index.json')
									
								}, 'index.json')
							},JSON.stringify(data),localpath)
						},hymnal.path)
					}).catch(function(err){ 
						return err
					})
		    }

		    async function asyncfor(){
					for (i in localHymnals) {
						let hymnal = localHymnals[i]
						if(hymnal.isDownloaded === true){
							let j
							for(j in onlineHymnals) {

								if(onlineHymnals[j].id === hymnal.id) {  
								if(hymnal.DoneSongs !== onlineHymnals[j].DoneSongs || hymnal.Fixed !== onlineHymnals[j].Fixed) {
										let tmp = await longfunc(hymnal)
									}
								}
							}
						}
					}
					callback();
				}

			asyncfor();
			})
		})
	}

	updateHymnals(hymnals, callback) {
		let i
		let self = this
		let downloadedHymnals = []
		for(i in hymnals) {
			let hymnal = hymnals[i]
			if(hymnal.isDownloaded === true)downloadedHymnals.push(hymnal.id)
		}
		files.writeFile(function(){
			// Check for hymnals to download or update
			self.checkHymnalsDb(function(){
				self.Languages = self.Languages_d
				self.hymnals = self.hymnals_d
				self.default = self.default_d
				self.actuallyUpdateHymnals(function(){
					return callback()
				})
			})
		},JSON.stringify(downloadedHymnals),'downloaded.json')
	}

	quickUpdateApp(callback) {
		let self = this
		let path = 'https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/index.json'
		axios
		.get(path)
		.then(function(response){
			let data = response.data
			files.writeFile(function(){
				// alert('wrote files..')


				path = 'https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/allhymns.json'
				axios
				.get(path)
				.then(function(response){
					let data = response.data
					files.writeFile(function(){
						self.actuallyUpdateHymnals(callback);
					},JSON.stringify(data),'allhymns.json')
				}).catch(function(){
					return callback(true)
				})
				// self.actuallyUpdateHymnals(callback);
			},JSON.stringify(data),'index.json')
		}).catch(function(){
			// alert('some problem')
			return callback(true)
		})
	}
}

let hymnalInst = new hymnals()

export default {
	hymnalInst
};
