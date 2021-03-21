 $(document).ready(function() {
   $("form#ratingForm").submit(function(e)
   {
       e.preventDefault(); // prevent the default click action from being performed
       if ($("#ratingForm :radio:checked").length == 0) {
           $('#status').html("nothing checked");
           return false;
       } else {
           $('#status').html( 'Rating: ' + $('input:radio[name=rating]:checked').val() );
       }
   });
});
function myFunction(){
  var text =document.getElementById("floatingTextarea2").value;
  var text1=document.getElementById("text1").value
  var text2=document.getElementById("text2").value
  document.getElementById("demo").innerHTML=text;
  document.getElementById("demo1").innerHTML=text1;
  document.getElementById("demo2").innerHTML=text2;
}
var map;

function initialize() {
    var c = new google.maps.LatLng(51.1081183,71.4276438,17);
    var mapOptions = {
        zoom:17,
        center: c
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3' +
        '&signed_in=true&callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;
