/* eslint-disable no-undef */
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../../../redux/slices/problemCreate.slice";
import { useState } from "react";

ymaps.ready();

const YandexMap = () => {
  const { location } = useSelector((state) => state.problemCreate);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mapCenter, setMapCenter] = useState([39.6602227, 66.9184471]);
  const dispatch = useDispatch();

  // Handle the map click event
  const handleMapClick = async (e) => {
    const coords = e.get("coords"); // Get the clicked coordinates
    dispatch(setLocation(coords));
    try {
      console.log(coords);
      const response = await ymaps.geocode(coords);
      const firstGeoObject = response.geoObjects.get(0);
      console.log(firstGeoObject);

      const address = firstGeoObject.getAddressLine();
      console.log(address);

      // Update the state with the clicked location data
    } catch (error) {
      console.error("Error geocoding:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await ymaps.geocode(searchQuery);

      // Extract the search results from the response
      const results = response.geoObjects.toArray();

      if (results.length > 0) {
        // Get the coordinates of the first result
        const newCenter = results[0].geometry.getCoordinates();
        console.log(newCenter);

        // Update the map center with the new coordinates
        setMapCenter(newCenter);
      }

      // Map the results to extract relevant information
      const searchResultsData = results.map((result) => ({
        name: result.getAddressLine(),
        geometry: result.geometry.getCoordinates(),
      }));

      // Update the state with the search results
      setSearchResults(searchResultsData);
    } catch (error) {
      console.error("Error searching for locations:", error);
    }
  };

  const handleSearchInputChange = (value) => {
    setSearchQuery(value);
  };

  console.log(mapCenter);

  return (
    <>
      <YMaps
        query={{
          apikey: "26697c51-3c19-4db6-9ce9-1b01015001c9",
        }}
      >
        <Map
          defaultState={{
            center: mapCenter,
          }}
          width="100%"
          height="400px"
          onClick={handleMapClick} // Attach the click event handler
        >
          {location && (
            <Placemark
              geometry={location}
              options={{ preset: "'islands#blueDotIcon'" }} // Customize the Placemark icon
            />
          )}

          {searchResults.map((result, index) => (
            <Placemark
              key={index}
              geometry={result.geometry}
              properties={{
                hintContent: result.name,
                balloonContent: result.name,
              }}
            />
          ))}
        </Map>
      </YMaps>
      <input
        type="text"
        placeholder="Search for a location..."
        value={searchQuery}
        onChange={(e) => {
          handleSearchInputChange(e.target.value);
        }}
      />
      <div
        className="border-2 p-4 inline-block cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </div>
    </>
  );
};

export default YandexMap;
