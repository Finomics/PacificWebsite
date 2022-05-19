import React from "react";

export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            width: "60%",
            height: "50px",
            backgroundColor: "#336699",
            border: "1.5px solid black",
            boxShadow: " 0px 0px 5px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "white", textAlign: "center", margin: "5px" }}>
            Our Mission
          </h2>
          <p
            style={{
              color: "black",
              textAlign: "center",
              marginTop: "25px",
              fontSize: "18px",
              fontFamily: "inherit",
            }}
          >
            Our mission is to serve our clients with creativity, enthusiasm,
            energy and vision. The principle is at the heart of our work.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "180px",
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            width: "60%",
            height: "50px",
            backgroundColor: "#336699",
            border: "1.5px solid black",
            boxShadow: " 0px 0px 5px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "white", textAlign: "center", margin: "5px" }}>
            Our Objective
          </h2>
          <p
            style={{
              color: "black",
              textAlign: "center",
              marginTop: "30px",
              fontSize: "18px",
              fontFamily: "inherit",
            }}
          >
            Our objective is to build long-lasting customer relationships by
            providing innovative and dynamic financial services in the
            commercial arena.
          </p>
        </div>
      </div>
    </div>
  );
}
