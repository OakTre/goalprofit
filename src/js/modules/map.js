export default () => {
	// function loadScript() {
	// 	var script = document.createElement('script');
	// 	script.type = 'text/javascript';
	// 	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBM-QwzS2G0X_PiDPqQX9v4p1a66oHG2cE&' + 'callback=initialize';
	// 	document.body.appendChild(script);
	// }

	if (!document.querySelector("input[name=coordinates]")) return;

	let inptCoords = document.querySelector("input[name=coordinates]").value;
	inptCoords = JSON.parse(inptCoords);
	let lat;
	let lng;
	let latlngStr;
	let coordinates;
	let markerImage = document.querySelector("#contact-us-map").getAttribute("data-map-icon");

    console.log(inptCoords);

	let styles = [{
			"stylers": [{
					"hue": "#007fff"
				},
				{
					"saturation": 89
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [{
				"color": "#ffffff"
			}]
		},
		{
			"featureType": "administrative.country",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}
	]

	let map = new google.maps.Map(document.getElementById("contact-us-map"), {
		center: new google.maps.LatLng(0, 0),
		zoom: 3
	});

	let infowindow = new google.maps.InfoWindow();
	let bounds = new google.maps.LatLngBounds();

	for (let i = 0; i < inptCoords.length; i++) {
		let lat = inptCoords[i].coords[0];
		let lng = inptCoords[i].coords[1];
		let coordinates = {
			lat: lat,
			lng: lng
		};

		let marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			icon: markerImage
		});

		bounds.extend(marker.position);

		let layout = `
            <div class="mark">
                <span class="mark__heading">
                    ${inptCoords[i].name}
                    <span>${inptCoords[i].country}</span>
                </span>
                <p class="mark__coordinates">${inptCoords[i].street}</p>
                <span class="mark__legend">Email</span>
                <a class="mark__link" href="mailto:${inptCoords[i].email}">${inptCoords[i].email}</a>
                <span class="mark__legend">Phone Number</span>
                <a class="mark__link" href="tel:+05251565481258">${inptCoords[i].tel}</a>
            </div>
        `;

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(layout);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}

	map.fitBounds(bounds);

	var listener = google.maps.event.addListener(map, "idle", function () {
		map.setZoom(3);
		google.maps.event.removeListener(listener);
	});

	map.setOptions({
		styles: styles
	});
}
