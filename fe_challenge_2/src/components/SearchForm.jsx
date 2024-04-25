import { useState } from "react";

function SearchForm() {
    const [pattern, changePattern] = useState("")
    const [btnType, changeBtnType] = useState("button")

    const enable = (e) => {
        changePattern(e.target.value)
        if (e.target.value)
            changeBtnType("submit")
        else
            changeBtnType("button")
    }
    return (
        <form role="search" method="get" className="form-inline" action="https://unbounce.com/" autoComplete="off">
            <div className="d-flex">
                <button type={btnType} className="btn btn-light rounded-0" data-bs-toggle="collapse" data-bs-target="#search-field" aria-expanded="false">
                    <i className="bi bi-search"></i>
                </button>
                <div className="collapse collapse-horizontal" id="search-field">
                    <input type="search" value={pattern} name="s" className="form-control rounded-0" onChange={enable} />
                </div>
            </div>
        </form>
    );
}

export default SearchForm;