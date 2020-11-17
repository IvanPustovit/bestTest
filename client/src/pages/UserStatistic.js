import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/Stats.scss";

const UserStatistic = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: "Christie",
      last_name: "Gann",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 2,
      first_name: "Hamil",
      last_name: "Cressey",
      email: "hcressey1@delicious.com",
      gender: "Male",
      ip_address: "45.225.25.145",
    },
    {
      id: 3,
      first_name: "Lottie",
      last_name: "Dupre",
      email: "ldupre2@dot.gov",
      gender: "Female",
      ip_address: "254.46.181.79",
    },
  ]);
  return (
    <div>
      <div className="stat-header">
        <Link className="stat-header_logo" to="/">
          AppCo
        </Link>
      </div>
      <div className="stat-main">
        <p>Main page > User Statistics</p>

        <h2>User statistics</h2>
        <div className="stat-table ">
          <div className="table-header stat-header">
            <p className="table-header_item">Id</p>
            <p className="table-header_item">Firs name</p>
            <p className="table-header_item">Last name</p>
            <p className="table-header_item">Email</p>
            <p className="table-header_item">Gender</p>
            <p className="table-header_item">Ip address</p>
            <p className="table-header_item">Total clicks</p>
            <p className="table-header_item">Total page views</p>
            {users.map((user) => (
              <>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  {user.id}
                </Link>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  {user.first_name}
                </Link>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  {user.last_name}
                </Link>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  {user.email}
                </Link>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  {user.gender}
                </Link>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  {user.ip_address}
                </Link>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  1
                </Link>
                <Link
                  to={`/user/${user.id}`}
                  className="table-content_item table-header_item "
                >
                  1
                </Link>
              </>
            ))}

            {/* <div className="table-content table-header stat-header">
            <div className="table-content_item table-header_item">1</div>
            <div className="table-content_item table-header_item">1</div>
            <div className="table-content_item table-header_item">1</div>
            <div className="table-content_item table-header_item">1</div>
            <div className="table-content_item table-header_item">1</div>
            <div className="table-content_item table-header_item">1</div>
            <div className="table-content_item table-header_item">1</div>
            <div className="table-content_item table-header_item">1</div>*/}
          </div>
        </div>
      </div>
      <div className="stat-footer"></div>
    </div>
  );
};

export default UserStatistic;
