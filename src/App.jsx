import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const API_KEY = "5ab673fece9a9b4905e1c6a92474cfa3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
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
