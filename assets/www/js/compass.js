/* // Wait for Cordova to load
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
*/

var watchID = null;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    startWatch();
}
// Start watching the compass
function startWatch() {
    // Update compass every 2 seconds
    var options = { frequency: 2000 };
    watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
// Stop watching the compass
function stopWatch() {
    if (watchID) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
    }
}
// onSuccess: Get the current heading
function onSuccess(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading;
}
// onError: Failed to get the heading
function onError() {
    alert('oooops!');
}