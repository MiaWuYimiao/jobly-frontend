import React from "react";

function CompanyCard({ company }) {
    return (
        <a className="CompanyCard" href={`/companies/${company.handle}`}>
            <div className="card-body">
                <h6>{company.name}</h6>
                <p>
                    <small>{company.description}</small>
                </p>
            </div>
        </a>
    )
}

export default CompanyCard;