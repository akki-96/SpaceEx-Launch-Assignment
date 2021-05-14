const Card = ({ items }) => {
  return (
    <div className="card">
      <div className="imgTag">
        <img src={items.links.patch.small} alt="spaceCraftImage" />
      </div>
      <div className="container">
        <h3>
          {items.name} #{items.flight_number}
        </h3>{" "}
        <br />
        <h4>
          Mission Ids :{" "}
          <ul style={{ marginLeft: "1.5rem" }}>
            {" "}
            <li> {items.id}</li>
          </ul>{" "}
        </h4>
        <br />
        <h4>
          Launch Year :{"  "}
          {parseInt(items.date_local)}
        </h4>{" "}
        <br />
        <h4>Successful Launch : {items.success ? "true" : "false"}</h4> <br />
        <h4>
          Successful Landing :{" "}
          {items.cores[0].landing_attempt ? "true" : "false"}
        </h4>{" "}
        <br />
      </div>
    </div>
  );
};

export default Card;
