import React, { useContext, useRef } from "react";
import AuthContext from "../AuthContext";

const Search = ({ setSearch }) => {
  const auth = useContext(AuthContext);

  const inputElement = useRef();

  console.log(auth.search);
  return (
    <div>
      <input
        ref={inputElement}
        onChange={(e) => setSearch(e.target.value)}
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
