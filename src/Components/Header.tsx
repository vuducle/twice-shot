import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

type iStanTwice = {
  history: any;
  handleSubmit: any;
};

function Header({ history, handleSubmit }: iStanTwice) {
  return (
    <div>
      <h1>Twice-App</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
}

export default Header;
