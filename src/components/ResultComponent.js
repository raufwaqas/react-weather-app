import Timezone from "./Timezone";

const ResultComponent = ({ result }) => {
  console.log(result);
  let { name, sys, weather, wind, main, timezone } = result.data || [];
  return (
    <>
      <h4 className="text-center text-capitalize mb-3">
        {name}, {sys.country}
      </h4>
      <div className="cards">
        <div className="card-1">
          <img
            src={`http://openweathermap.org/img/wn/${weather
              ?.filter((item, index) => index === 0)
              ?.map((item) => item?.icon)}@2x.png`}
            alt=""
          />
          <span className="fs-6 fw-semibold"> {main?.temp} °C </span>
          <span className="fw-lighter text-secondary">Temprature</span>
        </div>
        <div className="card-2">
          <i className="fs-2 bi bi-wind"></i>
          <span className="fs-6 fw-semibold">{wind?.speed} KM/H</span>
          <span className="fw-lighter text-secondary">Wind</span>
        </div>
        <div className="card-3">
          <i className="bi bi-droplet fs-2"></i>
          <span className="fs-6 fw-semibold"> {main?.humidity} %</span>
          <span className="fw-lighter text-secondary">Humidity</span>
        </div>
        <div className="card-4">
          <i className="bi bi-water fs-2"></i>
          <span className="fs-6 fw-semibold"> {main?.pressure} hPa</span>
          <span className="fw-lighter text-secondary">Presure</span>
        </div>
        <div className="card-5">
          <i className="bi bi-sunrise fs-2"></i>
          <span className="fs-6 fw-semibold">
            <Timezone input={sys.sunrise} timezone={timezone} />
            {/* ${hourConverter(sys.sunrise, timezone)}{" "} */}
          </span>
          <span className="fw-lighter text-secondary">Sunrise</span>
        </div>
        <div className="card-6">
          <i className="bi bi-sunset fs-2"></i>
          <span className="fs-6 fw-semibold">
            <Timezone input={sys.sunset} timezone={timezone} />
            {/* ${hourConverter(sys.sunset, timezone)} */}
          </span>
          <span className="fw-lighter text-secondary">Sunset</span>
        </div>
      </div>
    </>
  );
};

export default ResultComponent;
