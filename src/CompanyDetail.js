import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "./LoadingSpinner";


function CompanyDetail() {
    const { handle } = useParams();

    const [company, setCompany] = useState("");

    useEffect(() => {
        async function getCompanyJobs() {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
        };
        getCompanyJobs();
    }, [])

    if(!company) return <LoadingSpinner />;


    return (
        <div className="CompanyDetail col-md-8 offset-md-2">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetail;