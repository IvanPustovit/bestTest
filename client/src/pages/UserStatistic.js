import React, { useEffect, useState } from "react";
import HeaderUserPage from "../component/Users/HeaderUserPage";
import UsersTable from "../component/Users/UsersTable";
import FooterUserPage from "../component/Users/FooterUserPage";
import "../scss/Stats.scss";

const UserStatistic = () => {
  const [users, setUsers] = useState([]);

  const getUserList = async () => {
    await fetch("/allUser")
      .then((res) => res.json())
      .then((data) => setUsers(data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div>
      <HeaderUserPage />
      <div className="stat-main container">
        <p>{`Main page > User Statistics`}</p>

        <h2>Users statistics</h2>
        <UsersTable users={users} />
      </div>
      <div className="stat-footer">
        <FooterUserPage />
      </div>
    </div>
  );
};

export default UserStatistic;
