import React from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

const UsersTable = ({ users }) => {
  const data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "First name",
        field: "firstName",
        sort: "asc",
        width: 270,
      },
      {
        label: "Last name",
        field: "lastName",
        sort: "asc",
        width: 200,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
        width: 150,
      },
      {
        label: "Ip address",
        field: "ipAddress",
        sort: "asc",
        width: 100,
      },
      {
        label: "Total clicks",
        field: "totalClicks",
        sort: "asc",
        width: 100,
      },
      {
        label: "Total page views",
        field: "totalPageViews",
        sort: "asc",
        width: 100,
      },
    ],
    rows: users.map((user) => ({
      id: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.id}
        </Link>
      ),
      firstName: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.first_name}
        </Link>
      ),
      lastName: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.last_name}
        </Link>
      ),
      email: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.email}
        </Link>
      ),
      gender: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.gender}
        </Link>
      ),
      ipAddress: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.ip_address}
        </Link>
      ),
      totalClicks: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.clicks || 0}
        </Link>
      ),
      totalPageViews: (
        <Link
          to={`/user/${user.id}?name=${user.first_name}&lastName=${user.last_name}`}
          className="table-content_item table-header_item "
        >
          {user.page_views || 0}
        </Link>
      ),
    })),
  };
  return (
    <div>
      <MDBDataTable
        searching={false}
        entries={50}
        striped
        bordered
        small
        data={data}
      />
    </div>
  );
};

export default UsersTable;
