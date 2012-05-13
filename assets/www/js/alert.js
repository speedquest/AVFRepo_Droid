    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        // Empty
    }

    // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alert
    //
    function showAlert() {
        navigator.notification.alert(
            'This will alert you of upcoming auto service intervals!',  // message
            alertDismissed,         // callback
            'Oil Change Due NOW!',            // title
            'Done'                  // buttonName
        );
    }
