import hymnals from '../hymnals/'

function checkforUpdates() {
	if(updateinProgress === true)return false;
	if(updateScheduled === false)return false;	//don't update without a schedule
	updateinProgress = true;

	hymnals.hymnalInst.quickUpdateApp(function(err){ //update also index.json
		if(!err){
			updateScheduled = false;	//schedule done
			updateinProgress = false; //finished
			updated = true;

		}else {
			updateinProgress = false
		}
	})
}

function scheduleUpdates(interval) {
	if(updateScheduled === false) {
		updateScheduled = true
		checkforUpdates()
		setInterval(function(){ updateScheduled = true; checkforUpdates() }, interval);
	}
}

export default {
  scheduleUpdates,
  checkforUpdates
};
