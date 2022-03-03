export default () => {
	if (!document.querySelector("input[name=coordinates]")) return;
	let inptCoords = document.querySelector("input[name=coordinates]").value;
	let latlngStr = inptCoords.split(',', 2);
	let lat = parseFloat(latlngStr[0]);
	let lng = parseFloat(latlngStr[1]);
	let coordinates = { lat: lat, lng: lng };
	let markerImage = document.querySelector("#contact-us-map").getAttribute("data-map-icon")

	let styles = [
        {
            "stylers": [
                {
                    "hue": "#007fff"
                },
                {
                    "saturation": 89
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

	let map = new google.maps.Map(document.getElementById("contact-us-map"), {
		center: coordinates,
		zoom: 3
	});

	let marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: markerImage
	});

	map.setOptions({styles: styles});
}
