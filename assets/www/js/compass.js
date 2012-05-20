// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    navigator.compass.getCurrentHeading(onSuccess, onError);
}

// onSuccess: Get the current heading
//
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
}

// onError: Failed to get the heading
//
function onError(compassError) {
    alert('Compass Error: ' + compassError.code);
}
