function drawMarkers(markersType, country) {
  selectedMarkerType = markersType;
  const stateMarkers = countries[country][markersType];
  const states = Object.keys(stateMarkers);

  states.forEach((state) => {
    if (stateMarkers[state].offices.length === 0) return;
    let markerIconContainer = document.createElement("div");
    let markerIcon = document.createElement("div");
    // let shadow = document.createElement("div"); // Create a text node
    markerIcon.className = `marker ${country} ${state}`;
    // shadow.classList.add("leaflet-marker-shadow");
    // markerIconContainer.appendChild(shadow);
    markerIconContainer.appendChild(markerIcon);

    const mapMarker = new mapboxgl.Marker(markerIconContainer, {
      anchor: "bottom",
      offset: [0, 0],
    })
      .setLngLat(stateMarkers[state].coordinates)
      .addTo(mymap)
      .getElement();
    markers.push(mapMarker);
    mapMarker.addEventListener("click", (e) => changeMarkerColor(e, state));

  });
}

function reset(target) {
  // document.querySelectorAll(`.${state}`).forEach((el) => {
  //   el.classList.remove("selected");
  // });
  menuItems.forEach((item) => item.classList.remove("selected"));

  const unselected = tabs.filter((tab) => tab != target);
  let type = "";
  unselected.forEach((tab) => tab.classList.remove("selected"));

  target.classList.add("selected");
  markers.forEach((marker) => marker.remove());
  switch (target.id) {
    case "industriales":
      type = "industrialMarkers";
      break;
    case "comerciales":
      type = "officeMarkers";
      break;
  }
  mymap.flyTo({ center: [0, 0], essential: true, zoom: 2.4 });
  markerContainer.innerHTML = "";
  mapDescription.innerHTML = "";

  countryKeys.forEach((country) => drawMarkers(type, country));
}


function changeMarkerColor(event, state) {
  resetMarkerIcon();
  mapFlyTo(event.target.classList[1].split("-")[0], state);
  const country = event.target.classList[1];

  let marker = document.querySelector(`.marker.${event.target.classList[1]}`);
  marker.classList.add("marker-selected");

console.log(event.target.classList)
  event.target.style.backgroundImage = ICON.iconUrlSelected;
  event.target.classList.add("marker-selected");

  displayMarkerCards(country, state);
}

function resetMarkerIcon(resetMenu = null) {
  document.querySelectorAll(".marker").forEach((marker) => {
    marker.style.backgroundImage = ICON.iconUrl;
    marker.classList.remove("marker-selected");
  });

  document.querySelectorAll(".marker-info").forEach((marker) => {
    marker.classList.remove("selected");
  });

  if (resetMenu) {
    document.querySelectorAll(".map-left-menu li").forEach((el) => {
      el.classList.remove("selected");
    });
  }
}

function displayAllMarkerCards(country){
    const selectedCountry = countries[country];
    let nuevoArr = [];

    Object.values(selectedCountry.industrialMarkers).forEach(edo => {
        edo.offices.forEach(sucursal => {
            nuevoArr.push(sucursal);
        });
    });
    let content = "";

    nuevoArr.map((marker) => {
    content += `
		<li class="${country} selected marker-info">
		  <div class="marker-info__main">
			<div class="marker marker-info__marker ${country} ${marker.state ? marker.state.replace(/ /g,"") : ""} displayMarker"></div>
			<div class="marker-info__content">
			  <p class="marker-info__title">${marker.name}</p>
			  <p>${marker.address}</p>
			  <p>${marker.phone || ""}</p>
			</div>
		  </div>
			<div class="link">
				<div > &nbsp;
                <span class="dashicons dashicons-arrow-right-alt2"></span>
				</div>
			</div>
		</li>`;
    });
    console.log('nuevoArr', nuevoArr)
    markerContainer.innerHTML = content;
    addMarkerFn();
}

    function addMarkerFn(){
    const displayMarkers = document.querySelectorAll('.displayMarker');

    document.querySelectorAll(".displayMarker").forEach((displayMarker) => {
    displayMarker.addEventListener('click', (e) => {
        console.log(e.target.classList.toString().split(" ").filter((clase) => !clase.toLocaleLowerCase().includes("marker")));
         })
    })
}

function displayMarkerCards(country, state) {
  //displays a card with location information
  document.querySelectorAll(`.${state}`).forEach((el) => {
    el.classList.add("selected");
  });

  let content = "";
  const selectedCountry = countries[country];

  selectedCountry[selectedMarkerType][state]["offices"].map((marker) => {
    content += `
		<li class="${country} selected marker-info">
		  <div class="marker-info__main">
			<div class="marker marker-info__marker ${state}"></div>
			<div class="marker-info__content">
			  <p class="marker-info__title">${marker.name}</p>
			  <p>${marker.address}</p>
			  <p>${marker.phone || ""}</p>
			</div>
		  </div>
			<div class="link">
				<div > &nbsp;
                <span class="dashicons dashicons-arrow-right-alt2"></span>
				</div>
			</div>
		</li>`;
  });

  markerContainer.innerHTML = content;

}

function mapFlyTo(country, state) {
  //map zoom depending on the country
  // displayMarkerCards(country);
  let zoom = 5;
  //depending on the section this changes (Plantas industriales/oficinas comerciales)
  let prefix =
    selectedMarkerType === "industrialMarkers"
      ? "Plantas Industriales"
      : "Oficinas Comerciales";
  prefix += "<br />";
  switch (country) {
    case "usa":
      mapDescription.innerHTML = `${prefix} Estados Unidos`;
      zoom = 2.9;
      break;
    case "esp":
      mapDescription.innerHTML = `${prefix} España`;
      break;
    case "ven":
      mapDescription.innerHTML = `${prefix} Venezuela`;
      break;
    case "col":
      mapDescription.innerHTML = `${prefix} Colombia`;
      break;
    default:
      mapDescription.innerHTML = country;
      break;
  }

  const coordinates = countries[country][selectedMarkerType][state].coordinates;
  mymap.flyTo({
    center: coordinates,
    essential: true,
    zoom: zoom,
  });
}