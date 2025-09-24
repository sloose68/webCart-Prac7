// src/map-view.js
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Legend from "@arcgis/core/widgets/Legend";

class ArcGISMap extends HTMLElement {
  constructor() {
    super();

    // Light DOM container (needed for ArcGIS widgets)
    this.mapContainer = document.createElement("div");
    this.mapContainer.id = "viewDiv";
    this.mapContainer.style.width = "100%";
    this.mapContainer.style.height = "90vh"; // fill viewport
    this.appendChild(this.mapContainer);
  }

  connectedCallback() {
    const zoom = Number(this.getAttribute("zoom")) || 12;

    const map = new Map({ basemap: "streets-navigation-vector" });
    const view = new MapView({
      container: this.mapContainer,
      map: map,
      center: [138.6007, -34.9285],
      zoom: zoom
    });

    // Client-side FeatureLayer with two markers
    const featureLayer = new FeatureLayer({
      source: [
        {
          geometry: { type: "point", longitude: 138.6007, latitude: -34.9285 },
          attributes: { type: "CBD", name: "Adelaide CBD" },
          popupTemplate: {
            title: "{name}",
            content: "<h3>{type}</h3><p>Adelaide CBD content goes here.</p>"
          }
        },
        {
          geometry: { type: "point", longitude: 138.78360, latitude: -34.92896 },
          attributes: { type: "Home", name: "Home Location" },
          popupTemplate: {
            title: "{name}",
            content: "<p>This is my home location.</p>"
          }
        },
        {
          geometry: { type: "point", longitude: 138.594, latitude: -34.919 },
          attributes: { type: "River", name: "River Torrens" },
          popupTemplate: {
            title: "{name}",
            content: '<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Adelaide_-_SA_%2825091207887%29.jpg" width="250"><br>River Torrens'
          }
        }
      ],
      objectIdField: "ObjectID",
      fields: [
        { name: "ObjectID", type: "oid" },
        { name: "type", type: "string" },
        { name: "name", type: "string" }
      ],
      renderer: {
        type: "unique-value",
        field: "type",
        uniqueValueInfos: [
          { value: "CBD", symbol: { type: "simple-marker", color: "blue", size: 12 }, label: "CBD" },
          { value: "Home", symbol: { type: "simple-marker", color: "red", size: 14, style: "diamond" }, label: "Home" },
          { value: "River", symbol: { type: "simple-marker", color: "green", size: 12 }, label: "River Torrens" }
        ]
      }
    });

    map.add(featureLayer);

    // Add widgets
    view.ui.add(new BasemapToggle({ view, nextBasemap: "satellite" }), "bottom-right");
    view.ui.add(new ScaleBar({ view, unit: "metric" }), "bottom-left");
    view.ui.add(new Legend({ view, layerInfos: [{ layer: featureLayer, title: "Points of Interest" }] }), "top-right");
  }
}

// Define custom element
customElements.define("arcgis-map", ArcGISMap);
