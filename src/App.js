import React from "react";
import { Header, Hero, Footer } from "./layout";

const App = () => {
  var axios = require("axios").default;

  var options = {
    method: "POST",
    url: "https://shopifyvolodimir-kudriachenkov1.p.rapidapi.com/getProducts",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-host": "Shopifyvolodimir-kudriachenkoV1.p.rapidapi.com",
      "x-rapidapi-key": "5cfc1be5abmshd1403c4581fd4d0p16250fjsn8c259cf4bf6c",
    },
    data: { shopName: "<REQUIRED>", accessToken: "<REQUIRED>" },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div className="min-vh-100 wrapper">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
