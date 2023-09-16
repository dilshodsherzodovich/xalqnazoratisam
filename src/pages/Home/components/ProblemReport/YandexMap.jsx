import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../../../redux/slices/problemCreate.slice";

const YandexMap = () => {
  const { location } = useSelector((state) => state.problemCreate);
  const dispatch = useDispatch();

  // Handle the map click event
  const handleMapClick = (e) => {
    const coords = e.get("coords"); // Get the clicked coordinates
    dispatch(setLocation(coords));
  };

  const city = {
    latitude: "39.6602227",
    longitude: "66.9184471",
  };

  return (
    <YMaps>
      <Map
        defaultState={{ center: [city.latitude, city.longitude], zoom: 10 }}
        width="100%"
        height="400px"
        onClick={handleMapClick} // Attach the click event handler
      >
        {location && (
          <Placemark
            geometry={location}
            options={{ preset: "'islands#blueHomeIcon'" }} // Customize the Placemark icon
          />
        )}
      </Map>
    </YMaps>
  );
};

export default YandexMap;
