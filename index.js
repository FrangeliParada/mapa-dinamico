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
let markerContainer = window.innerWidth >= 1024 ? rightMenu : mobileDescription;
//marker selection

//fly to selected country in left menu
const array = (data) => Array.from(data);
const menuLeftItems = array(document.querySelectorAll(".map-left-menu li"));
const infoMarker = array(document.querySelectorAll(".marker-info .marker"));
const menuTopItems = array(document.querySelectorAll(".map-top__menu li"));
const menuItems = [...menuLeftItems, ...menuTopItems, ...infoMarker];

tabs = array(document.querySelector(".nav-maps").children);

const markers = [];
const myMarkers = document.querySelectorAll(".marker");
let selectedMarkerType = "industrialMarkers";
let currentCountry;
let state;

//marker icon information
const ICON = {
  iconUrl: 'url("/wp-content/uploads/2021/09/marker-white.svg")',
  iconUrlSelected: 'url("/wp-content/uploads/2021/09/marker-red.svg")',
  shadowUrl: 'url("/wp-content/uploads/2021/09/marker-shadow.svg")',
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
    currentCountry = countries[country];
    state = currentCountry.defaultState;
    const selectedItems = document.querySelectorAll(`li.${country}`);
    menuItems.forEach((item) => item.classList.remove("selected"));
    if (!li.classList.contains("selected")) mapFlyTo(country, state);
    selectedItems.forEach((item) => item.classList.add("selected"));
    //para mostrar solo una carta
    //document.querySelector(`#map.mapboxgl-map .marker.${country}`).click();
    //para mostrar todas las cartas de cada pais
    displayAllMarkerCards(country);
  });
});

tabs.forEach((tab) => tab.addEventListener("click", () => reset(tab)));
// when an user flips his phone or resizes the window, mobile and desktop marker cards are gonna be displayed,
// this checks if this resize happens and displays the aproppiate view
window.addEventListener("resize", () => {
  markerContainer = window.innerWidth >= 1024 ? rightMenu : mobileDescription;
  state && displayMarkerCards(country, state);
});

const venLeft = document.querySelector('.map-left-menu .ven');
const clickIndus = document.getElementById('industriales');
const clickCom = document.getElementById('comerciales');
const venclick = document.querySelector('.map-top__menu .ven');

function aggSelected() {
    venclick.classList.add('selected');
    venLeft.classList.add('selected');
    clickIndus.classList.add('selected');
    // clickCom.classList.add('selected');
    document.querySelector(".map-left-menu .ven").click();
}
 aggSelected();

    clickIndus.addEventListener('click', () => {
        venLeft.classList.add('selected');
        document.querySelector(".map-left-menu .ven").click();
    })
     clickCom.addEventListener('click', () => {
        venLeft.classList.add('selected');
        document.querySelector(".map-left-menu .ven").click();
    })