import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Legend from "@arcgis/core/widgets/Legend";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

class MyMap {
  constructor(containerId) {
    this.containerId = containerId;
  }

  async init() {
    const map = new Map({ basemap: "streets-navigation-vector" });

    const view = new MapView({
      container: this.containerId,
      map: map,
      center: [138.6007, -34.9285],
      zoom: 10
    });

    view.when(() => {
      this.addFeatureLayer(map);
      this.addWidgets(view);
    });
  }

  addFeatureLayer(map) {
    // Feature data with extra fields for popup content
    const features = [
      {
        geometry: { type: "point", longitude: 138.6007, latitude: -34.9285 },
        attributes: {
          ObjectID: 1,
          Category: "Adelaide City Centre",
          ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Adelaide_-_SA_%2825091207887%29.jpg",
          Description: "Adelaide!"
        }
      },
      {
        geometry: { type: "point", longitude: 138.6050, latitude: -34.9200 },
        attributes: {
          ObjectID: 2,
          Category: "Second Marker",
          ImageUrl: "",
          Description: "This is a second location with a distinct symbol."
        }
      },
      {
        geometry: { type: "point", longitude: 138.78360, latitude: -34.92896 },
        attributes: {
          ObjectID: 3,
          Category: "Home",
          ImageUrl: "",
          Description: "192 Blockers Road!"
        }
      }
    ];

    const featureLayer = new FeatureLayer({
      source: features,
      objectIdField: "ObjectID",
      fields: [
        { name: "ObjectID", type: "oid" },
        { name: "Category", type: "string" },
        { name: "ImageUrl", type: "string" },
        { name: "Description", type: "string" }
      ],
      renderer: {
        type: "unique-value",
        field: "Category",
        uniqueValueInfos: [
          {
            value: "Adelaide City Centre",
            symbol: {
              type: "simple-marker",
              color: "blue",
              size: 12
            },
            label: "Adelaide City Centre"
          },
          {
            value: "Second Marker",
            symbol: {
              type: "simple-marker",
              color: "red",
              size: 14,
              style: "diamond"
            },
            label: "Second Marker"
          },
          {
            value: "Home",
            symbol: {
              type: "simple-marker",
              color: "yellow",
              size: 20
            },
            label: "Home"
          }
        ]
      },
      popupTemplate: {
        title: "{Category}",
        content: `
          <div>
            {Description}<br>
            <img src='{ImageUrl}' width='250'>
          </div>
        `
      }
    });

    map.add(featureLayer);
    this.featureLayer = featureLayer;
  }

  addWidgets(view) {
    view.ui.add(new BasemapToggle({ view, nextBasemap: "satellite" }), "bottom-right");

    view.ui.add(new ScaleBar({ view, unit: "metric" }), "bottom-left");

    view.ui.add(
      new Legend({
        view,
        layerInfos: [{ layer: this.featureLayer, title: "Point Markers" }]
      }),
      "top-right"
    );
  }
}

const mapApp = new MyMap("viewDiv");
mapApp.init();
