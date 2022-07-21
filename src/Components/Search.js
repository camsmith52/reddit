import React, { useContext, useRef } from "react";
import AuthContext from "../AuthContext";

const Search = () => {
  const auth = useContext(AuthContext);

  const inputElement = useRef();

  return (
    <div>
      <input
        ref={inputElement}
        
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
