import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from "./Components/Search";
import AuthContext from "./AuthContext";
import Content from "./Components/Content";

function App() {
  const [search, setSearch] = useState('AskReddit')

  const sendRequest = (input) =>{
    //send a request to fetch content from reddit api
    console.log(input)
  }

  return (
    <AuthContext.Provider value={{ search: search, sendRequest: sendRequest }}>
      <Router path={'/'}>
        <Search setSearch={setSearch} />
        <Content/>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
