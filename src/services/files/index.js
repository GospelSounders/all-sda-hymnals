function checkStatus(callback) {
	callback(deviceReady)
}

/*
 * copy applicationdir/www to datadir/www if it does not exist
 */

function copyDirInit() {
    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www",
	    function(sourceDir) {
	        let srcDir = 'hymnals-data'; 
	        let destDir = 'hymnals-data'; 
	        sourceDir.getDirectory(srcDir, {create: false}, function (directory){
	        	window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www",
	        		function(parentDir){
	        			directory.copyTo(parentDir, destDir, function(){},function(e){} )
	        		}
	        		,null);
	        	}
	        	, 
	        	function(){});
		}
		,function(){});
}

function init(whichFile) {
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory, 
		function(tmp){
		window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/hymnals-data/"+whichFile,
			function (fileEntry)
		    {
		    	//create this directory if it does not exist
		    	window.resolveLocalFileSystemURL(cordova.file.dataDirectory,
		    		function(mainDir){
		    			try{
		    			window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www/hymnals-data",
				    		function(subDir){},
				    		function(){
				    			mainDir.getDirectory('www', { create: true }, function (dirEntry) {
				    				copyDirInit();
							    }, function(e){   });
				    		}
				    	);
		    			}catch(e){}
		    		},
		    		function(){}
		    	);
		    }, 
		    null);
		},null
	    );
}

function openFile_(callback, whichFile) {
	window.resolveLocalFileSystemURL(whichFile, 
		function(fileEntry){
			fileEntry.file(function(file) {
				var reader = new FileReader();

				reader.onloadend = function(e) {
					return callback(null, this.result);
				}
				reader.readAsText(file);
			})
		}, function(){callback(true);}
	);
}

function openFile(callback, whichFile) {
	let path = cordova.file.dataDirectory + "www/hymnals-data/"+whichFile
	openFile_(function(err, result){
		if(err) {
			init(whichFile)
			path = cordova.file.applicationDirectory + "www/hymnals-data/"+whichFile
			openFile_(function(err, result){ 
				if (err);
				return callback(err, result);
			}, path)
		} else {
			return callback(err, result);
		}
	}, path)
}

function writeFile(callback, dataObj, whichFile) {
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory+ "www/hymnals-data/", 
		function(dir) {
			dir.getFile(whichFile, {create:true, exclusive: false}, function(file) {
				let logOb = file;
				logOb.createWriter(function(fileWriter) {
					let blob = new Blob([dataObj], {type:'text/plain'});
					fileWriter.write(blob);
					fileWriter.onwriteend = function() {
		            	callback(null);
		        	};
		        	fileWriter.onerror = function (e) {   };
				}, function(e){});		
			});
		}
		, function(e){
			callback(true);}
	);
}

export default {
  checkStatus,
  openFile,
  writeFile
}
