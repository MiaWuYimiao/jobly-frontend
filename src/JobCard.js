import React, { useContext} from "react";
import UserContext from "./userContext";
import "./JobCard.css";

function JobCard({job}) {
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    function handleClick() {
        applyToJob(job.id);
    }

    return (
        <div className="JobCard card">
            <div className="card-body">
                <h6 className="card-title">{job.title}</h6>
                <p>{job.companyName? job.companyName : ""}</p>
                <div><small>Salary:{job.salary}</small></div>
                <div><small>Equity:{job.equity}</small></div>
                <button onClick={handleClick} className="btn btn-danger fw-bold text-uppercase float-end">
                    {hasAppliedToJob(job.id)?
                        "Applied": "Apply"
                    }
                </button>
            </div>
        </div>
    )
}

export default JobCard;