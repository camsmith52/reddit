import React, { useState } from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Search from "./Components/Search";
import AuthContext from "./AuthContext";
import Content from "./Components/Content";
import Categories from "./Components/Categories";

function App() {
  const [search, setSearch] = useState('popular')
  const [searchInBar, setSearchInBar] = useState('')
  const [data, setData] = useState([]);
  const [subRedditClicked, setSubRedditClicked] = useState(false);

  const sendRequest = (input) =>{
    if(!input) {
      console.log('returned')
      return}
    //send a request to fetch content from reddit api
    setSubRedditClicked(true)
    setSearchInBar(input)
  }

  return (
    <AuthContext.Provider
      value={{
        search: search,
        sendRequest: sendRequest,
        data: data,
        setData: setData,
        setSearch: setSearch,
        searchInBar: searchInBar,
        setSearchInBar: setSearchInBar,
        subRedditClicked: subRedditClicked,
        setSubRedditClicked: setSubRedditClicked,
      }}
    >
      <Search />
      <Router path={"/"}>
        <div style={{ display: "flex" }}>
          <Content />
          <Categories setSearch={setSearch} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
