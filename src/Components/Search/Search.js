import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) =>{
        setSearchValue(e.target.value);
    }

    //Reseting field after every input
    const resetInputField = () => {
        setSearchValue("");
    }

    //Take search input
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue, e.target.value);
        resetInputField();
    }

    return(
        <div className="artist-search">
            <form className="">
                <input value={searchValue} onChange={handleSearchInputChanges} type="search" />
                <button onClick = {callSearchFunction} type="submit" value="SEARCH"> Search </button>
            </form>
        </div>
    );
}

export default Search;