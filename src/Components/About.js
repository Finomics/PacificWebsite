import React from "react";

export default function About() {
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
            
            textAlign: "center",
            width: "60%",
            height: "50px",
            backgroundColor: "#336699",
            border: "1.5px solid black",
            boxShadow: " 0px 0px 5px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "white", textAlign: "center", margin: "5px" }}>
            About Us
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
            Pacific Financial Services (Pvt.) Ltd. (Pacific), incorporated in
            the year 2002 under the Companies Ordinance 1984, is a multi-faceted
            company dedicated to providing a wide range of financial services to
            high net worth individuals and corporate clients.
            <br />
            From fast growing middle market companies to industry giants,
            Pacific helps companies stay ahead of the curve by providing sound
            financial solutions. Our management has the experience and resources
            to advise companies on alternative financing methods needed in
            today&#39;s competitive business environment.
            <br />
            We provide a range and quality of services normally found only in
            the largest international practices, combined with a flexibility and
            dedication to personal service usually associated with much smaller
            organizations.
            <br />
            With offices in Pakistan, Hong Kong and Japan, we are fully geared
            up for providing you the services related to the financial
            management of your organization.
          </p>
        </div>
      </div>

      {/* <div
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
          backgroundColor: "#1976D2",
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
    </div> */}
    </div>
  );
}
