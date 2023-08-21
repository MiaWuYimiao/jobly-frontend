import React, { useState, useEffect } from "react";
import "./JobList.css";
import JoblyApi from "./api";
import JobCard from "./JobCard";

function JobList() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs() {
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs);
            setIsLoading(false);
        }
        getJobs();
    },[])

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <div className="JobList">
            <div className="JobList-searchform">
                <form>
                    <input type="text" placeholder="Enter search term.."></input>
                    <button>Submit</button>
                </form>
            </div>
            <div className="JobList-cardlist">
                {jobs.map(job => (
                    <JobCard job={job}/>
                ))}
            </div>
        </div>
    );
}

export default JobList;