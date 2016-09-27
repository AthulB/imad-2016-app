var button = document.getElementById('counter');
button.onClick = function() {
counter = counter +1;
var span = document.getElementById('counter');
span.innerHTML = counter.toString();
};
