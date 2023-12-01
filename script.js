function changeVolume(amount) {
    let volume = document.getElementById('volume');
    let newVolume = parseInt(volume.innerText) + amount;
    volume.innerText = Math.max(0, Math.min(10, newVolume)); // Limit between 0 and 10
}

function changeTemperature(side, amount) {
    let tempElement = document.getElementById(side + 'Temp');
    let newTemp = parseInt(tempElement.innerText) + amount;
    tempElement.innerText = newTemp + '°C';
}

// Example of handling music source selection
document.getElementById('radio').addEventListener('click', function() {
    alert('Radio selected');
});
// Similarly, add event listeners for 'phone' and 'cd'

// Lock and Unlock Vehicle
document.getElementById('lock').addEventListener('click', function() {
    alert('Vehicle Locked');
});

document.getElementById('unlock').addEventListener('click', function() {
    alert('Vehicle Unlocked');
});

// Open Trunk
document.getElementById('trunk').addEventListener('click', function() {
    alert('Trunk Opened');
});
