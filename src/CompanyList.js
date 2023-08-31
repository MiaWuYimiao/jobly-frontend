import React, { useEffect, useState } from "react";
import "./CompanyList.css";
import CompanyCard from './CompanyCard';
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import LoadingSpinner from "./LoadingSpinner";

function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
        }
        getCompanies();
    },[])

    async function searchFor(searchTerm) {
        const res = await JoblyApi.getCompanies(searchTerm);
        setCompanies(res);
    }

    if(!companies) return <LoadingSpinner />;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchForm searchFor={searchFor} />
            <div className="CompanyList-list">
                {companies.map(company => (
                    <CompanyCard company={company}/>
                ))}
            </div>
        </div>
    );
}

export default CompanyList;