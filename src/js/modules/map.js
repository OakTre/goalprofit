export default () => {
	if (!document.querySelector(".js-map-item")) return;

	const mapitems = Array.from(document.querySelectorAll(".js-map-item"));

	let markerImage = document.querySelector("#contact-us-map").getAttribute("data-map-icon");

	let map = new google.maps.Map(document.getElementById("contact-us-map"), {
		center: new google.maps.LatLng(0, 0),
		zoom: 3
	});

	let infowindow = new google.maps.InfoWindow();
	let bounds = new google.maps.LatLngBounds();

	mapitems.forEach((item, index)=>{
		let inptCoords = item.querySelector("input[name=coords]").value;
		inptCoords = JSON.parse(inptCoords);
		let lat = inptCoords[0];
		let lng = inptCoords[1];
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
                    ${item.dataset.name}
                    <span>${item.dataset.location}</span>
                </span>
                <p class="mark__coordinates">${item.dataset.street}</p>
                <span class="mark__legend">Email</span>
                <a class="mark__link" href="mailto:${item.dataset.emal}">${item.dataset.emal}</a>
                <span class="mark__legend">Phone Number</span>
                <a class="mark__link" href="tel:+05251565481258">${item.dataset.tel}</a>
            </div>
        `;

		google.maps.event.addListener(marker, 'click', (function (marker, index) {
			return function () {
				infowindow.setContent(layout);
				infowindow.open(map, marker);
			}
		})(marker, index));
	});

	map.fitBounds(bounds);

	var listener = google.maps.event.addListener(map, "idle", function () {
		map.setZoom(3);
		google.maps.event.removeListener(listener);
	});

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

	map.setOptions({
		styles: styles
	});
}
