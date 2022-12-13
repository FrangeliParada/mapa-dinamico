const mapDescription = document.getElementById("mobile--map__description");

// Creating mapbox
mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJhbnllciIsImEiOiJja3RqMTY2YWIxN2d4Mm9ueHpnZnl3cDRkIn0.avFcpHPsJu_mtz-mD5g-mA";
const mymap = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/branyer/cktj1e5gj0su317mkfittjeui",
  center: [0, 0],
  renderingMode: "2d",
  zoom: 2.4,
});

mymap.dragRotate.disable();
mymap.scrollZoom.disable();
mymap.touchZoomRotate.disable();
mymap.doubleClickZoom.disable();

const rightMenu = document.querySelector(".map-right-menu");
const mobileDescription = document.getElementById(
  "mobile--marker__description"
);
const markerContainer =
  window.innerWidth >= 1024 ? rightMenu : mobileDescription;
//marker selection

//fly to selected country in left menu
const menuLeftItems = Array.from(
  document.querySelectorAll(".map-left-menu li")
);
const infoMarker = Array.from(
  document.querySelectorAll(".marker-info .marker")
);
const menuTopItems = Array.from(document.querySelectorAll(".map-top__menu li"));

const menuItems = [...menuLeftItems, ...menuTopItems, ...infoMarker];

tabs = Array.from(document.querySelector(".nav-maps").children);

const markers = [];
const myMarkers = document.querySelectorAll(".marker");
let selectedMarkerType = "industrialMarkers";

// const tarColombia = document.querySelector(".Bogota");
// tarColombia.classList.add('marker-selected')

//marker icon information
const ICON = {
  iconUrl: "/wp-content/uploads/2021/09/marker-white.svg",
  shadowUrl: "/wp-content/uploads/2021/09/marker-shadow.svg",
  shadowSize: [50, 50],
  iconSize: [60, 60],
  iconAnchor: [25, 25],
  shadowAnchor: [6, 2],
  popupAnchor: [0, -25],
  className: "dot",
};

const countryKeys = Object.keys(countries);
countryKeys.forEach((country) => {
  drawMarkers(selectedMarkerType, country);
});

menuItems.forEach((li, index) => {
  li.addEventListener("click", () => {
    country = li.classList[0];
    const currentCountry = countries[country];
    const state = currentCountry.defaultState;
    const selectedItems = document.querySelectorAll(`li.${country}`);
    console.log(selectedItems);
    menuItems.forEach((item) => item.classList.remove("selected"));
    if (!li.classList.contains("selected")) mapFlyTo(country, state);
    selectedItems.forEach((item) => item.classList.add("selected"));

   document.querySelector(`#map.mapboxgl-map .marker.${country}`).click();

  });
});

tabs.forEach((tab) => tab.addEventListener("click", () => reset(tab)));
// when an user flips his phone or resizes the window, mobile and desktop marker cards are gonna be displayed,
// this checks if this resize happens and displays the aproppiate view
window.addEventListener("resize", () => {
  state && displayMarkerCards(state);
});
