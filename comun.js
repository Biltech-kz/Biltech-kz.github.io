<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
      html, body, #map-canvas {
        height: 80%;
        width: 80%;
        margin: 10px;
        padding: 10px
      }
    </style>

    <script>
    var map;

    function initialize() {
        var c = new google.maps.LatLng(51.090665,71.418116);
        var mapOptions = {
            zoom:30,
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
    </script>
  </head>
  <body>
    <div id="map-canvas"></div>

  </body>
</html>
