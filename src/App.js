import Travel from "./Travel";
import { useState, useEffect } from "react";

const App = () => {
  return (
    <div>
      <div></div>
      {data && <Travel data={data.section} />}
    </div>
  );
};

export default App;
