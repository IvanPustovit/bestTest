import React, { useEffect, useState } from "react";
import FooterUserPage from "../component/Users/FooterUserPage";
import HeaderUserPage from "../component/Users/HeaderUserPage";
import { useLocation, useParams } from "react-router-dom";
import Charts from "../component/Charts";
import "../scss/Stats.scss";

const UsersPage = () => {
  const [statistic, setStatistic] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [dateFilter, setDateFilter] = useState({});
  const idUser = useParams().id;
  const name = new URLSearchParams(useLocation().search).get("name");
  const lastName = new URLSearchParams(useLocation().search).get("lastName");

  const onChangeCalendarStart = (e) => {
    setDateFilter({ ...dateFilter, [e.target.name]: e.target.value });
  };

  const getUser = async (id) => {
    await fetch(`/user/${id}`)
      .then((res) => res.json())
      .then((data) => setStatistic(data))
      .catch((err) => console.log(err));
  };

  const filterData = (arr) => {
    const dataFiltered = arr.filter(
      (el) => el.date >= dateFilter.start && el.date <= dateFilter.finish
    );
    setFilterArr(dataFiltered);
  };

  useEffect(() => {
    getUser(idUser);
    filterData(statistic);
  }, [idUser, dateFilter]);

  const DataObj = () => {
    let labels = [];
    let dataGrafClick = [];

    if (!filterArr.length) {
      labels = statistic.map((el) => el.date);
      dataGrafClick = statistic.map((el) => el.clicks);
      const myData = {
        labels: labels,
        datasets: [
          {
            label: "Clicks",
            data: dataGrafClick,
          },
        ],
      };
      return myData;
    }
    labels = filterArr.map((el) => el.date);
    dataGrafClick = filterArr.map((el) => el.clicks);
    const myData = {
      labels: labels,
      datasets: [
        {
          label: "Clicks",
          data: dataGrafClick,
        },
      ],
    };
    return myData;
  };

  const DataObjViews = () => {
    let labels = [];
    let dataGraftView = [];

    if (!filterArr.length) {
      labels = statistic.map((el) => el.date);
      dataGraftView = statistic.map((el) => el.page_views);
      const dataViews = {
        labels: labels,
        datasets: [
          {
            label: "Page views",
            data: dataGraftView,
          },
        ],
      };
      return dataViews;
    }
    labels = filterArr.map((el) => el.date);
    dataGraftView = filterArr.map((el) => el.page_views);
    const dataViews = {
      labels: labels,
      datasets: [
        {
          label: "Page views",
          data: dataGraftView,
        },
      ],
    };
    return dataViews;
  };

  return (
    <div>
      <HeaderUserPage />
      <div className="stat-main container">
        <p>{`Main page > User Statistics`}</p>

        <h2>{name + lastName}</h2>
      </div>
      <div className="date-filter">
        <div className="admin-calendar">
          <input
            type="date"
            name="start"
            onChange={onChangeCalendarStart}
          ></input>
        </div>
        <div className="admin-calendar">
          <input
            type="date"
            name="finish"
            onChange={onChangeCalendarStart}
          ></input>
        </div>
      </div>
      <Charts myData={DataObj} />
      <Charts myData={DataObjViews} />
      <FooterUserPage />
    </div>
  );
};

export default UsersPage;
