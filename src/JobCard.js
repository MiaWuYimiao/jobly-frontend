import React from "react";

function JobCard({job}) {

    return (
        <div className="JobCard">
            <div className="card-body">
                <h6>{job.title}</h6>
                <p>{job.companyName? job.companyName : ""}</p>
                <div><small>Salary:{job.salary}</small></div>
                <div><small>Equity:{job.equity}</small></div>
                <button>Apply</button>
            </div>
        </div>
    )
}

export default JobCard;