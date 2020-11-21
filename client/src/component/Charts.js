import React from "react";
import { Line } from "react-chartjs-2";
import "../scss/Stats.scss";

const Charts = ({ myData }) => {
  const data = myData();
  return (
    <div className="container charts">
      <Line data={data} />
    </div>
  );
};

export default Charts;
