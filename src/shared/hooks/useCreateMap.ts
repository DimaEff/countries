import React, { useEffect } from "react";

import { loadModules } from "esri-loader";

export const useCreateMap = (mapRef: React.MutableRefObject<HTMLDivElement | null>, center: number[]) => {
    useEffect(() => {
        let view: any;
        const initializeMap = async (mapRef: React.MutableRefObject<HTMLDivElement | null>) => {
            const modules = ["esri/Map", "esri/views/MapView", "esri/Graphic"];
            const [Map, MapView, Graphic] = await loadModules(modules);
            const map = new Map({
                basemap: "streets-relief-vector",
            });
            view = new MapView({
                map: map,
                zoom: 10,
                container: mapRef.current,
                center,
            });

            const point = {
                type: "point",
                longitude: center[0],
                latitude: center[1],
            };

            const markerSymbol = {
                type: "simple-marker",
                color: [255, 0, 0],
                outline: {
                    color: [255, 255, 255],
                    width: 2,
                },
            };

            const pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol,
            });

            view.graphics.add(pointGraphic);
        };
        initializeMap(mapRef);
        return () => view?.destroy();
    }, [center, mapRef]);
};
