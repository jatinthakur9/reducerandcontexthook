import React, { useContext } from "react";
import { MyAppContext } from "../App";

function Hello() {
  const val = useContext(MyAppContext);
  return <div>hello</div>;
}

export default Hello;
