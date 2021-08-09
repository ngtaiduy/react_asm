import React from "react";
import Header from "../components/admin/header";
import Nav from "../components/admin/nav";

const AdminLayout = (props) => {
  return (
    <div>
      <div className="flex flex-col">
        <Header />
        <div className="">
          <div className="flex">
            <Nav className="" />
            <main className="w-full">{props.children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
