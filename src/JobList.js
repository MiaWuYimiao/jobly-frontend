import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "./LoadingSpinner";
import SearchForm from "./SearchForm";

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs() {
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs);
        }
        getJobs();
    },[])

    async function searchFor(searchTerm) {
        const res = await JoblyApi.getJobs(searchTerm);
        setJobs(res);
    }

    if(!jobs) {
        return <LoadingSpinner />
    }

    return (
        <div className="JobList col-md-8 offset-md-2">
            <SearchForm searchFor={searchFor} />
            {jobs.length?
                <JobCardList jobs={jobs} />
                : <p className="lead">Sorry, no results were found!</p>
            }
        </div>
    );
}

export default JobList;