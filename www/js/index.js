let deviceReady = false;
let timeToUpdate = true;
let updateScheduled = false;
let updateinProgress = false;
let updated = false;	//reload hymnal data if update was done

function device_is_ready() {
    deviceReady = true;
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        device_is_ready();
    },
};

app.initialize();