import React from "react";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

function Home() {
  const count = useAppSelector((state) => state.counter.value);
  return <div>{count}</div>;
}

export default Home;
