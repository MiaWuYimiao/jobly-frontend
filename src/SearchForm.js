import React, { useState } from "react";

function SearchForm({ searchFor }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(evt) {
        evt.persist()
        setSearchTerm(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        searchFor(searchTerm.trim())
    }


    return (
        <div className="SearchForm mb-4">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center justify-content-lg-start gx-0">
                    <div className="col-8">
                        <input 
                            className="form-control form-control-lg" 
                            type="text"
                            placeholder="Enter search term.."
                            onChange={handleChange}
                            name="searchTerm"
                            value={searchTerm}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-lg btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;