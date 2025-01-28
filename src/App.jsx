import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-full realtive">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg round-3x1 border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadown-md"
          placeholder="Enter Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
