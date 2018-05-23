let deviceReady = false;

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