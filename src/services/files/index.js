function checkStatus(callback) {
	callback(deviceReady)
}

function openFile(callback, whichFile) {
	window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/hymnals-data/index.json", 
		function(fileEntry){
			fileEntry.file(function(file) {
				var reader = new FileReader();

				reader.onloadend = function(e) {
					callback(null, this.result);
				}

				reader.readAsText(file);
			})
		}, function(){callback(true);}

	);
}

export default {
  checkStatus,
  openFile
}
