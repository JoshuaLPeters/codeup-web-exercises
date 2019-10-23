
// Long / Lat for Merimakasiini 60.161275,24.9237178
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10',
    zoom: 12,
    center: [24.927057, 60.16072]
});

// // GEOCODE PULLING ADDRESS FOR Merimakasiini
// geocode("Hietalahdenranta 14, 00180 Helsinki, Finland", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setCenter(result);
//     // map.setZoom(20);
// });
//
// // GEOCODE PULLING ADDRESS FOR FAT RAMEN
// geocode("Lönnrotinkatu 34, 00180 Helsinki, Finland", mapboxToken).then(function(result) {
//     console.log(result);
// });
//
// // GEOCODE PULLING ADDRESS FOR BACCO
// geocode("Lönnrotinkatu 18, 00100 Helsinki, Finland", mapboxToken).then(function(result) {
//     console.log(result);
// });
//
// // OPTIONS FOR MARKER
// var markerOptions = {
//     color: "#03D0D0",
// };
//
// //POPUP FOR RESTAURANT NAME Merimakasiini
// var popup = new mapboxgl.Popup({ offset: 50 })
//     .setLngLat([24.927057, 60.16072])
//     .setHTML("<p>Merimakasiini</p>")
//     .addTo(map);
//
//
// // MARKER FOR RESTAURANT Merimakasiini
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([24.927057, 60.16072])
//     .addTo(map)
//     .setPopup(popup) // sets a popup on this marker
//     .togglePopup()
//
// //POPUP FOR RESTAURANT NAME FAT RAMEN
// var popupRamen = new mapboxgl.Popup({ offset: 50 })
//     .setLngLat([24.931304, 60.163112])
//     .setHTML("<p>Fat Ramen</p>")
//     .addTo(map);
//
//
// // MARKER FOR RESTAURANT FAT RAMEN
// var markerRamen = new mapboxgl.Marker(markerOptions)
//     .setLngLat([24.931304, 60.163112])
//     .addTo(map)
//     .setPopup(popupRamen) // sets a popup on this marker
//     .togglePopup()
//
// //POPUP FOR RESTAURANT NAME BACCO
// var popupBacco = new mapboxgl.Popup({ offset: 50 })
//     .setLngLat([24.935319, 60.164621])
//     .setHTML("<p>Bacco</p>")
//     .addTo(map);
//
//
// // MARKER FOR RESTAURANT BACCO
// var markerBacco = new mapboxgl.Marker(markerOptions)
//     .setLngLat([24.935319, 60.164621])
//     .addTo(map)
//     .setPopup(popupBacco) // sets a popup on this marker
//     .togglePopup()

var favoriteRestaurants = [
    {
        name: "Merimakasiini, an authentic Finnish experience",
        address: "Hietalahdenranta 14, 00180 Helsinki, Finland",
        website: "https://merimakasiini.fi",
        coordinates: {
            latitude: 24.927057,
            longitude: 60.16072
        }
    },
    {
        name: "Fat Ramen, the best damn ramen you will ever have.",
        address: "Lönnrotinkatu 34, 00180 Helsinki, Finland",
        website: "https://fatramen.fi/",
        coordinates: {
            latitude: 24.931304,
            longitude: 60.163112
        }
    },
    {
        name: "Bacco, a cozy restaurant with exquisite italian dishes prepared right in front of you",
        address: "Lönnrotinkatu 18, 00100 Helsinki, Finland",
        website: "http://bacco.fi/en/",
        coordinates: {
            latitude: 24.935319,
            longitude: 60.164621
        }
    }
];

var markerOptions = {
    color: "#03D0D0",
};

favoriteRestaurants.forEach(function(restaurant){
    geocode(restaurant.address, mapboxToken).then(function(result) {
        console.log(result);

        //POPUP FOR RESTAURANT NAME Merimakasiini
        var popup = new mapboxgl.Popup({ offset: 50 })
            .setLngLat(result)
            // .setHTML("<p>"+ restaurant.name + "</p>")
            .setHTML('<a href="'+ restaurant.website+'"><p>'+ restaurant.name + '</p></a>')

            .addTo(map);

        // MARKER FOR RESTAURANT Merimakasiini
        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .addTo(map)
            .setPopup(popup) // sets a popup on this marker
            .togglePopup()
    });
});


