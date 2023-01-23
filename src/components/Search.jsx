import React from 'react'

const Search = ({ searchInput, search, handleSearch }) => {
    return (
        <div className="Search">
            <input type="text" value={search}  ref={searchInput} onChange={handleSearch}/>
        </div>
    );
}

export default Search