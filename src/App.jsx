import React, { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    //  code
    localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);
    setData(localStorage.getItem("count"));
    return () => {
      //  clean up function
    };
  }, []);
  const [data, setData] = useState(null);

  console.log(data);
  return <div>Hello Devs {data}</div>;
};

export default App;
