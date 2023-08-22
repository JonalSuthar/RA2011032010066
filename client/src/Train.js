import React, { useState, useEffect } from "react";
import axios from "axios";
import "./train.css";

function TrainInfo() {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/train")
      .then((response) => {
        setTrainData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>TRAIN DETAILS</h1>

      <div className="train-info">
        {trainData.length > 0 ? (
          trainData.map((train, index) => (
            <div key={index}>
              <h2>{train.trainName}</h2>
              <p>Train Number: {train.trainNumber}</p>
              <p>
                Departure Time: {train.departureTime.Hours}:
                {train.departureTime.Minutes}:{train.departureTime.Seconds}
              </p>
              <p>Seats Available:</p>
              <ul>
                <li>Sleeper: {train.seatsAvailable.sleeper}</li>
                <li>AC: {train.seatsAvailable.AC}</li>
              </ul>
              <p>Price:</p>
              <ul>
                <li>Sleeper: {train.price.sleeper}</li>
                <li>AC: {train.price.AC}</li>
              </ul>
              <p>Delayed By: {train.delayedBy} minutes</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default TrainInfo;
