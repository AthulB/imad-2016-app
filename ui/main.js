console.log('Loaded!');
var image = document.getElementById('madi');
var marginleft = 0;
function marginRight() {
  marginLeft += 5;
  img.style.marginLeft = marginLeft +'px';
}
img.onclick = function() {
    var interval = setInterval(marginRight,50)
};
