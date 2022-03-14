import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import LoadingScreen from "./LoadingScreen";

const HomeScreen = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    handleApiCall();
  }, []);

  const handleApiCall = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);

      console.log(`CLicked ${advice}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!advice) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <Header />

      <div className="main">
        <div className="card card-mobile">
          <h1 className="">{advice}</h1>

          <div className="button-container">
            <button onClick={handleApiCall} className="button">
              Next Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
