(function ($) {
  "use strict";

  $(document).ready(function () {
    var geocoder = new google.maps.Geocoder();
    var fullAddress =
      "Road 8, House 69, Block D, Niketon, Gulshan 1, Dhaka, Bangladesh";

    geocoder.geocode({ address: fullAddress }, function (results, status) {
      if (status === "OK") {
        var location = results[0].geometry.location;

        var mapProp = {
          center: location,
          zoom: 15,
          styles: [
            {
              featureType: "all",
              elementType: "all",
              stylers: [{ visibility: "on" }],
            },
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ color: "#ffffff" }, { visibility: "on" }],
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                { saturation: 36 },
                { color: "#aeaeae" },
                { lightness: 40 },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                { visibility: "off" },
                { color: "#000000" },
                { lightness: 16 },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }, { color: "#aeaeae" }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [{ color: "#000000" }, { lightness: 20 }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                { color: "#000000" },
                { lightness: 17 },
                { weight: 1.2 },
              ],
            },
            {
              featureType: "administrative.country",
              elementType: "geometry.fill",
              stylers: [{ color: "#100d0d" }],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#000000" }, { lightness: 20 }],
            },
            {
              featureType: "landscape.natural.landcover",
              elementType: "geometry.fill",
              stylers: [{ color: "#050404" }, { visibility: "on" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#000000" }, { lightness: 21 }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ saturation: "-43" }],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                { gamma: "10.00" },
                { lightness: "100" },
                { visibility: "on" },
                { color: "#1647c2" },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#c200ff" }],
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                { lightness: "-43" },
                { saturation: "6" },
                { gamma: "0.41" },
                { color: "#383838" },
              ],
            },
          ],
        };

        var map = new google.maps.Map(
          document.getElementById("googleMap"),
          mapProp
        );

        new google.maps.Marker({
          map: map,
          position: location,
        });
      } else {
        console.error("Geocode failed due to: " + status);
      }
    });
  });
})(jQuery);
