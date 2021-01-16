import React from "react";
import axios from "axios";

import Nav from "./nav";
import Footer from "./footer";
// import Meta from './meta'

const Layout = ({ children }) => {
  const [currentData, setCurrentData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const cachedDataJSON = localStorage.getItem("node-update-currentdata");
    const cachedData = JSON.parse(cachedDataJSON);
    const currentTime = new Date().getTime();

    const fetchCurrentData = async () => {
      try {
        const currentResponse = await axios.get(
          "https://node.nodeupdate.com/nodeinfo/currentdata"
        );
        setCurrentData(currentResponse.data[0]);

        const cachedData = {
          currentData: currentResponse.data[0],
          time: new Date().getTime(),
        };

        const cachedDataJSON = JSON.stringify(cachedData);
        localStorage.setItem("node-update-currentdata", cachedDataJSON);

        setTimeout(() => {
          console.log(`Hello ✌(ツ)`);
        }, 400);
      } catch (e) {
        setError(error);
      }
    };

    if (!cachedData || (cachedData && currentTime - cachedData.time > 60000)) {
      fetchCurrentData();
    } else {
      setCurrentData(cachedData.currentData);
    }
  }, [error]);

  console.log("CURRENT", currentData);

  return (
    <>
      {/* <Meta /> */}
      <div>
        <Nav currentData={currentData} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
