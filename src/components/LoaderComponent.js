import React from "react";
import { Plane } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderComponent = ({ city, isloading, status }) => {
  return (
    <h4 className="text-center">
      {city === "" ? (
        "search for a city"
      ) : isloading ? (
        <Plane ariaLabel="loading-indicator" />
      ) : status ? (
        city
      ) : (
        "city not found"
      )}
    </h4>
  );
};

export default LoaderComponent;
