var button = document.getElementById('counter');


button.onclick = function() {
   var request = new XMLHttpRequest();
 request.onReadyStateChange = function() {
    if(request.readyState === XMLHttpRequest.Done) {
        if(request.status ===200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    } 
 } ; 

request.open('Get' ,' http://athulb.imad.hasura-app.io/counter',true);
request.send(null);




};
