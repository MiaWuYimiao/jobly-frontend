import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";

function CompanyDetail() {
    const { handle } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [company, setCompany] = useState("");

    useEffect(() => {
        async function getCompanyJobs() {
            let jobs = await JoblyApi.getCompanyJobs(handle);
            setJobs(jobs);
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setIsLoading(false);
        };
        getCompanyJobs();
    }, [])

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="CompanyDetail">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <div className="JobCardList">
                {jobs.map(job => (
                    <JobCard job={job}/>
                ))}
            </div>
        </div>
    )
}

export default CompanyDetail;