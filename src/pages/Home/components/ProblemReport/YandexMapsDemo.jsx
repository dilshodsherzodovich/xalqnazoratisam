import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../../redux/slices/problemCreate.slice";

function YandexMapsDemo() {
  const [selectedCoords, setSelectedCoords] = useState(null);
  const dispatch = useDispatch();

  const handleMapClick = (event) => {
    const coords = event.get("coords");
    setSelectedCoords(coords);
    dispatch(setLocation(event.get("coords")));
  };

  return (
    <div>
      <p>Xaritadan manzilni ko`rsating {"(ixtiyoriy)"}</p>
      <YMaps>
        <Map
          onClick={handleMapClick}
          defaultState={{ center: [39.6602227, 66.9184471], zoom: 10 }}
          width="100%"
          height="500px"
        >
          {selectedCoords && <Placemark geometry={selectedCoords} />}
        </Map>
      </YMaps>
    </div>
  );
}

export default YandexMapsDemo;
