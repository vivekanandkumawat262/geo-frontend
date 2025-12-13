import { useEffect, useRef, forwardRef, useImperativeHandle  } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./MapView.css";

type Property = {
  title: string;
  price: string;
  lat: number;
  lng: number;
};

export type MapViewHandle = {
  flyToLocation: (lng: number, lat: number) => void;
};

type MapViewProps = {
  properties?: Property[];
};

const  MapView = forwardRef<MapViewHandle, MapViewProps>(
  ({ properties = [] }, ref) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;

    // Initialize map
    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // FREE tiles
      center: [27.613769597659484, 75.1352166826147], // Default: Delhi (change if needed)
      zoom: 2,
    });

    // Add zoom + rotation controls
    mapRef.current.addControl(new maplibregl.NavigationControl(), "top-right");

    // Add markers
    properties.forEach((p) => {
        new maplibregl.Marker({color: "#071133"})
          .setLngLat([p.lng, p.lat])
          .setPopup(
            new maplibregl.Popup().setHTML(
                `<strong>${p.title}</strong><br/>${p.price}`
            )
          )
          .addTo(mapRef.current!);
    });

    return () => {
     mapRef.current?.remove();
     mapRef.current = null;
    }
  }, [properties]);

//    Expose method to parent 
  useImperativeHandle(ref, () => ({
    flyToLocation(lng:number, lat:number) {
        mapRef.current?.flyTo({
            center: [lng, lat],
            zoom: 13,
            essential: true,
        });
    },
  }));

  return ( <div className="map-container" ref={mapContainer}>
    <div style={{ height: "500px", background: "red" }}>
    MAP SHOULD BE HERE
    <div className="map-container" ref={mapContainer} />
  </div>
  </div>
  );

});


export default MapView;