import React, { useState } from "react";
import DataServicePresenter from "./DataServicePresenter";
import InputForm from "./InputForm";
import initData from "./InitData";
import { Helmet } from "react-helmet";

function DataServiceContainer() {
  const [state, setState] = useState(initData);
  // toast.dark("DataServiceContainer is not available");
  const handleResetData = () => {
    setState(initData);
  };

  const startCompile = () => {
    console.log("startCompile");
  };

  return (
    <>
      <Helmet>
        <title>BlockCrawl | 데이터 서비스</title>
      </Helmet>
      <InputForm
        state={state.toJS()}
        handleResetData={handleResetData}
        setState={setState}
        startCompile={startCompile}
      />
      <DataServicePresenter />
    </>
  );
}

export default DataServiceContainer;
