import React, { useState } from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Search from "./Components/Search";
import AuthContext from "./AuthContext";
import Content from "./Components/Content";
import Categories from "./Components/Categories";

function App() {
  const [search, setSearch] = useState('AskReddit')

  const sendRequest = (input) =>{
    //send a request to fetch content from reddit api
    setSearch(input)
    console.log(search)
  }

  return (
    <AuthContext.Provider value={{ search: search, sendRequest: sendRequest }}>
      <Router path={"/"}>
        <Search setSearch={setSearch} />
        <div style={{ display: "flex" }}>
          <Content />
          <Categories setSearch={setSearch} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
