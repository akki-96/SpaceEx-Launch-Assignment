import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [cardData, setCardData] = useState([]);
  const [inputSearch, setInputSearch] = useState();
  const [cardDataActual, setCardDataActual] = useState([]);
  const [copyCardData, setCopyCardData] = useState([]);

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
    const apiDataCopy = [...apiJsonData];
    const copyCardData = apiDataCopy.filter(
      (items) => items.links.patch.small != null
    );
    setCardData(copyCardData);
    setCardDataActual(apiJsonData);
    setCopyCardData(copyCardData);
  };

  useEffect(() => {
    apiCall();
  }, []);

  const filterByLaunchYear = (e) => {
    // console.log();
    const filteredData = cardDataActual.filter(
      (items) =>
        items.date_local.includes(e.target.value) ||
        items.date_local.includes(parseInt(inputSearch))
    );
    setCardData(filteredData);
  };

  //  useEffect(()=>{
  //   filterByLaunchYear();
  //  },[inputSearch])

  const filterBySuccessfulLaunch = (e) => {
    const filteredData = cardDataActual.filter((items) =>
      (items.success ? "true" : "false").includes(e.target.value)
    );
    setCardData(filteredData);
  };

  const filterBySuccessfulLand = (e) => {
    const filteredData = cardDataActual.filter((items) =>
      (items.cores[0].landing_attempt ? "true" : "false").includes(
        e.target.value
      )
    );
    setCardData(filteredData);
  };

  return (
    <div className="App">
      <h1 className="heading">SpacEx Launch Programs</h1>
      <div className="parent">
        <div className="child1">
          <div className="leftGrid">
            <div className="launchYear">
              <h1 className="filter">Filters</h1>
              <input
                name="inputSearch"
                type="number"
                min="2006"
                placeholder="Launch Year"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <div className="launchYearButton">
                {dateArray.map((items, idx) => {
                  return (
                    <div className="btn" onClick={(e) => filterByLaunchYear(e)}>
                      {" "}
                      <button id={idx} value={items}>
                        {items}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="successfulYear">
              <input type="text" placeholder="Successful Launch" />
              <div
                className="yearTrueFalse"
                onClick={(e) => filterBySuccessfulLaunch(e)}
              >
                <button value={true}>True</button>
                <button value={false}>False</button>
              </div>
            </div>
            <div className="successfulLand">
              <input type="text" placeholder="Successful Land" />
              <div
                className="landTrueFalse"
                onClick={(e) => filterBySuccessfulLand(e)}
              >
                <button value={true}>True</button>
                <button value={false}>False</button>
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

// const filterBySuccessfulLaunch =(e)=>{
//   console.log(e.target.value);
// }

// const filterBySuccessfulLand =(e)=>{
//   console.log(e.target.value);
// }
