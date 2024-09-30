import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#387ed1" }}>
      <div className="container text-light">
        <div className="row p-5">
          <div className="col-6">
            <h4>Support Portal</h4>
          </div>
          <div className="col-6 text-center">
            <a className="text-light" href="">
              Track Tickets
            </a>
          </div>
        </div>
        <div className="row" style={{ marginLeft: "35px" }}>
          <div className="col-5  mb-5">
            <h5>
              Search for an answer or browse help topics to create a ticket
            </h5>
            <div id="supportSearch">
              <form>
                <input
                  type="text"
                  placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..."
                  className="mt-4"
                />
                <button type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div>
              <a href="" className="text-light">
                Track account opening
              </a>{" "}
              <a href="" className="text-light">
                Track segment activation
              </a>{" "}
              <a href="" className="text-light">
                Intraday margins
              </a>{" "}
              <a href="" className="text-light">
                Kite user manual
              </a>{" "}
            </div>
          </div>
          <div className="col-5 p-5 mb-5" style={{ marginRight: "100px" }}>
            <h5>Featured</h5>
            <ol className="mt-4">
              <li>
                &nbsp;
                <a href="" className="text-light">
                  Offer for sale (OFS) - September 2024
                </a>{" "}
              </li>
              <br></br>
              <li>
                &nbsp;
                <a href="" className="text-light">
                  Latest Intraday leverages and Square-off timings
                </a>{" "}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
