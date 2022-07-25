import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import LoaderComponent from "./components/LoaderComponent";
import ResultComponent from "./components/ResultComponent";
import Searchbar from "./components/Searchbar";

function App() {
  let [city, setCity] = useState("");
  let [isloading, setIsLoading] = useState(false);
  let [status, setStatus] = useState(false);
  let [result, setResult] = useState([]);
  let pass = process.env.REACT_APP_PASWORD;
  let base = "https://api.openweathermap.org/data/2.5/weather";
  let units = "metric";
  let api = `${base}?q=${city}&appid=${pass}&units=${units}`;

  let fetchData = async () => {
    setResult([]);
    setIsLoading(true);
    return await axios
      .get(api)
      .then((res) => {
        setIsLoading(false);
        setStatus(true);
        setResult(res);
      })
      .catch((err) => {
        setIsLoading(false);
        setStatus(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (city === "") return;
    else {
      fetchData();
    }
  }, [api]);

  return (
    <Fragment>
      <div className="app">
        <h4 className="text-center">Wather App</h4>
        <Searchbar setCity={setCity} />
        <LoaderComponent city={city} isloading={isloading} status={status} />
        {result.length !== 0 ? <ResultComponent result={result} /> : null}
      </div>
    </Fragment>
  );
}

export default App;
