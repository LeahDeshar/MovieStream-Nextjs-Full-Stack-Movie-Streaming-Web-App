import React from "react";
import UserList from "./userList";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

function UserListPage() {
  return (
    <>
      <Header />
      <UserList />
      <Footer />
    </>
  );
}

export default UserListPage;
