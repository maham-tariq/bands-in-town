import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) =>{
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue, e.target.value);
        resetInputField();
    }

    return(
        <div className="artist-search">
            {/* <h1> {props.text} </h1> */}
            <form className="">
                <input value={searchValue} onChange={handleSearchInputChanges} type="search" />
                <button onClick = {callSearchFunction} type="submit" value="SEARCH"> Search </button>
            </form>
        </div>
    );
}

export default Search;