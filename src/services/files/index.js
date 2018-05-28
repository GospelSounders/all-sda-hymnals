function checkStatus(callback) {
	callback(deviceReady)
}

/*
 * copy applicationdir/www to datadir/www if it does not exist
 */

function copyDirInit() {
    // var parent = document.getElementById('parent').value,
    //     parentName = parent.substring(parent.lastIndexOf('/')+1),
    //     newName = document.getElementById('newName').value,
    //     parentEntry = new DirectoryEntry(parentName, parent);

    // // copy the directory to a new directory and rename it
    // entry.copyTo(parentEntry, newName, success, fail);
    alert('going to copy dir')
    try{
    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www",
	    function(sourceDir) {
	        // let roote = sourceDir.root;
	        // alert(roote)
	        // get the directory we want to get within the root directory
	        let srcDir = 'hymnals-data'; 
	        let destDir = 'hymnals-data'; 
	        sourceDir.getDirectory(srcDir, {create: false}, function (directory){
	        	window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www",
	        		function(parentDir){
	        			directory.copyTo(parentDir, destDir, function(){alert("copied DIR")},function(e){alert("failed to copy DIR"); alert(e)} )
	        		}
	        		,null);

	        	}
	        	, 
	        	function(){alert('error2')});
		}
		,function(){alert('error1')});
    }catch(e){alert(e)}
}


//directory.copyTo(root==source, dstDir, copyWin, copyFail);

function init(whichFile) {
	alert('copying files coz tey were nt found')
	//create directories...

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
				    		function(subDir){
				    			alert('folder exists...')
				    			
				    		},
				    		function(){
				    			alert('next does not exist,, create it')
				    			mainDir.getDirectory('www', { create: true }, function (dirEntry) {

				    				copyDirInit();
							        // dirEntry.getDirectory('hymnals-data', { create: true }, function (subDirEntry) {
							        // 	alert('created...')
							        // 	init(whichFile)
							        //     // createFile(subDirEntry, "fileInNewSubDir.txt");

							        // }, function(e){
							        // 	alert('failed to craete hymnals-data')
							        // });
							    }, function(e){
							    	alert('failed to craete www')
							    });
				    		}


				    	);
		    			}catch(e){}
		    		},
		    		function(){}
		    	);
		        // window.resolveLocalFileSystemURL(cordova.file.dataDirectory,
		        // 	function (directory)
		        // 	{                  
			       //     fileEntry.copyTo(directory, 'new_fileName.txt',
				      //      	function(){
				      //           alert('Successful Copy!');
				      //       },
				      //       function(e)
				      //       {
				      //           alert('Copying Unsuccessful ');
				      //           let i
				      //           alert(JSON.stringify(e))
				      //           for(i in e)alert(e)
				      //           // alert(e)
				      //       }
			       //      );
		        // 	},
		        // 	null);
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
	// console.log(cordova.file.applicationDirectory + "www/hymnals-data/"+whichFile)
	let path = cordova.file.dataDirectory + "www/hymnals-data/"+whichFile
	openFile_(function(err, result){
		if(err) {
			alert('loading from application dir')
			init(whichFile)
			path = cordova.file.applicationDirectory + "www/hymnals-data/"+whichFile
			openFile_(function(err, result){ 
				if (err);
				alert('returning')
				return callback(err, result);
			}, path)
		} else {
			alert('returning.........1')
			alert('loading from data dir')
			return callback(err, result);
		}
	}, path)
	// window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/hymnals-data/"+whichFile, 
	// 	function(fileEntry){
	// 		fileEntry.file(function(file) {
	// 			var reader = new FileReader();

	// 			reader.onloadend = function(e) {
	// 				return callback(null, this.result);
	// 			}

	// 			reader.readAsText(file);
	// 		})
	// 	}, function(){

			
	// 		alert("some problem...")

	// 		callback(true);

	// 	}
	// );
}


// function writeLog(str) {
// 	if(!logOb) return;
// 	var log = str + " [" + (new Date()) + "]\n";
// 	console.log("going to log "+log);
// 	logOb.createWriter(function(fileWriter) {
		
// 		fileWriter.seek(fileWriter.length);
		
// 		var blob = new Blob([log], {type:'text/plain'});
// 		fileWriter.write(blob);
// 		console.log("ok, in theory i worked");
// 	}, fail);
// }

function writeFile(callback, dataObj, whichFile) {
	// window.resolveLocalFileSystemURL(cordova.file.dataDirectory, 
		// window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/hymnals-data/"+whichFile,
		// function (fileEntry)
	 //    {
	 //        window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function (directory)
	 //        {                  
	 //           fileEntry.moveTo(directory, 'new_fileName.txt',function(){
	 //                alert('Successful Copy!');
	 //            },
	 //            function()
	 //            {
	 //                alert('Copying Unsuccessful ');
	 //            });
	 //        },null);
	 //    }, null);

	try{
	window.resolveLocalFileSystemURL(cordova.file.dataDirectory+ "www/hymnals-data/", 


		function(dir) {
			alert(cordova.file.dataDirectory)
			dir.getFile(whichFile, {create:true}, function(file) {
				alert("got the file"+ file);
				let logOb = file;
				logOb.createWriter(function(fileWriter) {
					fileWriter.seek(fileWriter.length);
					
					alert('writing....'+dataObj)
					var blob = new Blob([dataObj], {type:'text/plain'});
					fileWriter.write(blob);
					// alert("ok, in theory i worked");

					fileWriter.onwriteend = function() {
		            alert("Successful file write...");
		            // readFile(fileEntry);
		            callback(null);
		        };

		        fileWriter.onerror = function (e) {
		            alert("Failed file write: " + e.toString());
		            alert(JSON.stringify(e))
		            let i
		            for(i in e){
		            	alert(e[i])
		            }
		        };

				}, function(e){alert('failed'); alert(e)});		
			});
		}
		// function(fileEntry){
		// 	fileEntry.createWriter(function (fileWriter) {

		//         fileWriter.onwriteend = function() {
		//             alert("Successful file write...");
		//             // readFile(fileEntry);
		//             callback(null);
		//         };

		//         fileWriter.onerror = function (e) {
		//             alert("Failed file write: " + e.toString());
		//             alert(JSON.stringify(e))
		//             let i
		//             for(i in e){
		//             	alert(e[i])
		//             }
		//         };

		//         // If data object is not passed in,

		//         //saving to applicationdirectory...
		//         // create a new Blob instead.
		//         alert('writing....'+dataObj)
		//         dataObj = new Blob([dataObj], { type: 'text/plain' });
		//         fileWriter.write(dataObj);
		//     });
		// }
		, function(e){
			alert(e)
			callback(true);}

	);
	}catch(e){alert(e)}

	// window.resolveLocalFileSystemURL(cordova.file.dataDirectory, 
	// 	function(dir) {
	// 		console.log("got main dir",dir);
	// 		dir.getFile("log.txt", {create:true}, function(file) {
	// 			console.log("got the file", file);
	// 			logOb = file;
	// 			writeLog("App started");			
	// 		});
	// 	}, function(){callback(true);}

	// );
}

export default {
  checkStatus,
  openFile,
  writeFile
}
