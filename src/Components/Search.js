import React, { useContext, useRef } from "react";
import AuthContext from "../AuthContext";

const Search = ({ setSearch }) => {
  const auth = useContext(AuthContext);

  const inputElement = useRef();

  const searching = e=>{


    setSearch(e.target.value);
  }

  return (
    <div>
      <input
        ref={inputElement}
        onChange={(e) => searching(e)}
        value={auth.search}
        type="text"
        placeholder="Search"
      />
      <button onClick={() => auth.sendRequest(inputElement.current.value)}>
        Search
      </button>
    </div>
  );
};

export default Search;
