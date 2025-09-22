import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

class ArcGISMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
  <link rel="stylesheet"
        href="https://js.arcgis.com/4.29/esri/themes/light/main.css">
  <style>
    #viewDiv { height: 100vh; width: 100%; }
  </style>
  <div id="viewDiv"></div>
`;

  }

  connectedCallback() {
    const map = new Map({ basemap: "streets-navigation-vector" });
    const view = new MapView({
      container: this.shadowRoot.querySelector("#viewDiv"),
      map: map,
      center: [138.6007, -34.9285],
      zoom: 12
    });
    
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    view.when(() => {
      view.ui.add(new BasemapToggle({ view, nextBasemap: "satellite" }), "bottom-right");
      view.ui.add(new ScaleBar({ view, unit: "metric" }), "bottom-left");
      view.ui.add(new Legend({
        view,
        layerInfos: [{ layer: graphicsLayer, title: "Point Markers" }]
      }), "top-right");

      graphicsLayer.addMany([
        new Graphic({
          geometry: { type: "point", longitude: 138.6007, latitude: -34.9285 },
          symbol: new SimpleMarkerSymbol({ color: "blue", size: 12 }),
          popupTemplate: {
            title: "Adelaide CBD",
            content: `<img src="" width="250"><br>Adelaide CBD!`
          },
          popupEnabled: true
        }),
        new Graphic({
          geometry: { type: "point", longitude: 138.6050, latitude: -34.9200 },
          symbol: new SimpleMarkerSymbol({ color: "red", size: 14, style: "diamond" }),
          popupTemplate: {
            title: "Second Marker",
            content: "This is a second location with a distinct symbol."
          }
        })
      ]);
    });
    this.shadowRoot.querySelector("#viewDiv").addEventListener("contextmenu", (e) => {
      e.stopPropagation();
      // Do NOT call e.preventDefault()
    });
  }
}

customElements.define("arcgis-map", ArcGISMap);
