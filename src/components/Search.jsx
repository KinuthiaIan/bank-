import React from "react";

function Search(){
    return(
      <div className="input-group">
         <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
         <button type="button" class="btn btn-outline-primary bg-success text-white">search</button>
      </div>
    )
}

export default Search