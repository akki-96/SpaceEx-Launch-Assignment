import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [cardData, setCardData] = useState([]);
  //  const [copyData, setCopyData] = useState([]);
  const dateArray = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020"
  ];
  const apiCall = async () => {
    const apiData = await fetch(
      `https://api.spaceXdata.com/v4/launches?limit=100`
    );
    const apiJsonData = await apiData.json();
    console.log(apiJsonData[0].cores[0].landing_attempt);
    const apiDataCopy = [...apiJsonData];
    // setCopyData(apiDataCopy);
    setCardData(apiJsonData);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="App">
      <h1 className="heading">SpacEx Launch Programs</h1>
      <div className="parent">
        <div className="child1">
          <div className="leftGrid">
            <div className="launchYear">
              <h1 className="filter">Filters</h1>
              <input type="text" placeholder="Launch Year" />
              <div className="launchYearButton">
                {dateArray.map((items) => {
                  return (
                    <div className="btn">
                      {" "}
                      <button>{items}</button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="successfulYear">
              <input type="text" placeholder="Successful Launch" />
              <div className="yearTrueFalse">
                <button>True</button>
                <button>False</button>
              </div>
            </div>
            <div className="successfulLand">
              <input type="text" placeholder="Successful Land" />
              <div className="landTrueFalse">
                <button>True</button>
                <button>False</button>
              </div>
            </div>
          </div>
          <div className="rightGrid">
            {cardData.map((items) => (
              <div className="card">
                <img src={items.links.patch.small} alt="spaceCraftImage" />
                <div className="container">
                  <h4>
                    Mission Name : {items.name} #{items.flight_number}
                  </h4>{" "}
                  <br />
                  <h5>
                    Mission Ids :{" "}
                    <ul style={{ marginLeft: "1.5rem" }}>
                      {" "}
                      <li> {items.id}</li>
                    </ul>{" "}
                  </h5>
                  <br />
                  <h5>
                    Launch Year :{"  "}
                    {parseInt(items.date_local)}
                  </h5>{" "}
                  <br />
                  <h5>
                    Successful Launch : {items.success ? "true" : "false"}
                  </h5>{" "}
                  <br />
                  <h5>
                    Successful Landing :{" "}
                    {items.cores[0].landing_attempt ? "true" : "false"}
                  </h5>{" "}
                  <br />
                </div>
              </div>
            ))}
            <footer>
              <h2 className="footer">Developed by : Akhilesh Singh</h2>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
