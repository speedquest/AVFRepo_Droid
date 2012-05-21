

var watchID = null;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    startWatch();
}
// Start watching the compass
function startWatch() {
    // Update compass every 5 seconds
    var options = { frequency: 5000 };
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
    alert('Sorry, no compass available!');
}