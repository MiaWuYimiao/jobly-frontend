import React, { useEffect, useState } from "react";
import "./CompanyList.css";
import CompanyCard from './CompanyCard';
import JoblyApi from "./api";

function CompanyList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
            setIsLoading(false);
        }
        getCompanies();
    },[])

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <div className="CompanyList">
            <div className="CompanyList-searchform">
                <form>
                    <input type="text" placeholder="Enter search term.."></input>
                    <button>Submit</button>
                </form>
            </div>
            <div className="CompanyList-cardlist">
                {companies.map(company => (
                    <CompanyCard company={company}/>
                ))}
            </div>
        </div>
    );
}

export default CompanyList;