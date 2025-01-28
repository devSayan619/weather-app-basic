const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div>
          <div className="w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl relative m-auto px-6 top-[10%]">
            <div className="flex justify-between w-full">
              <div className="w-1/2 my-4  mx-auto flex justify-between items-center">
                <div className="flex flex-col items-start justify-between w-full">
                  <div>
                    <p className="text-xl">
                      {weatherData.name},{weatherData.sys.country}
                    </p>
                    <p className="text-sm">
                      {weatherData.weather[0].description}
                    </p>
                  </div>
                  <div className="text-5xl font-smibold">
                    {weatherData.main.temp.toFixed(1)}°c
                  </div>
                </div>
              </div>

              <div className="w-1/2 justify-between items-end">
                <div className="relative">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt=""
                    className="w-[120px]"
                  />
                </div>
                {weatherData.name !== undefined ? (
                  <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-sm">
                    <div className="flex justify-between gap-x-8">
                      <p>feels like</p>
                      <p className="font-bold w-20 ">
                        {weatherData.main.feels_like.toFixed(1)} °c
                      </p>
                    </div>
                    <div className="flex justify-between gap-x-8">
                      <p>humidity</p>
                      <p className="font-bold w-20 ">
                        {weatherData.main.humidity} %
                      </p>
                    </div>
                    <div className="flex justify-between gap-x-8">
                      <p>wind speed</p>
                      <p className="font-bold w-20 ">
                        {weatherData.wind.speed.toFixed(1)} KPH
                      </p>
                    </div>
                    <div className="flex justify-between gap-x-8">
                      <p>pressure</p>
                      <p className="font-bold w-20 ">
                        {weatherData.main.pressure} hPa
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
