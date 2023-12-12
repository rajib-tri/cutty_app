import React from "react";
import { PanelContent } from "components";

const Dashboard = () => {
  return (
    <PanelContent headerContent title="">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info rounded shadow">
            {/* <div className="inner">
              <h3>150</h3>
              <p>Total Leave Requests</p>
            </div> */}
            {/* <Link to="#" className="small-box-footer">
              More info <span className="arrow-icon">→</span>
            </Link> */}
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success rounded shadow">
            {/* <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>
              <p>Approved Leaves</p>
            </div> */}
            {/* <Link to="#" className="small-box-footer">
              More info <span className="arrow-icon">→</span>
            </Link> */}
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning rounded shadow">
            {/* <div className="inner">
              <h3>44</h3>
              <p>Pending Leave Requests</p>
            </div> */}
            {/* <Link to="#" className="small-box-footer">
              More info <span className="arrow-icon">→</span>
            </Link> */}
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger rounded shadow">
            {/* <div className="inner">
              <h3>65</h3>
              <p>Remaining Leave Balance</p>
            </div> */}
            {/* <Link to="#" className="small-box-footer">
              More info <span className="arrow-icon">→</span>
            </Link> */}
          </div>
        </div>

        {/* <div className="col-lg-6 col-12">
          <Card title="Leave Policies" className="rounded shadow">
            Information about company leave policies goes here.
          </Card>
        </div> */}
        {/* <div className="col-lg-6 col-12">
          <Card title="Upcoming Leaves" className="rounded shadow">
            Details about upcoming employee leaves can be displayed here.
          </Card>
        </div> */}
      </div>
    </PanelContent>
  );
};

export default Dashboard;
