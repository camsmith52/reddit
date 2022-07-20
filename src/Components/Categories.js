import React from 'react'
// import AuthContext from '../AuthContext'
// import { useContext } from 'react'

const Categories = ({setSearch}) => {

// const auth = useContext(AuthContext)

  return (
    <div>
        <h3>Popular Subreddits</h3>
      <button
        className="ui button"
        onClick={(e) => setSearch(e.target.innerHTML)}
      >
        AskReddit
      </button>
      <button
        className="ui button"
        onClick={(e) => setSearch(e.target.innerHTML)}
      >
        StarWars
      </button>
      <button
        className="ui button"
        onClick={(e) => setSearch(e.target.innerHTML)}
      >
        oddlyspecific
      </button>
      <button
        className="ui button"
        onClick={(e) => setSearch(e.target.innerHTML)}
      >
        worldnews
      </button>
      <button
        className="ui button"
        onClick={(e) => setSearch(e.target.innerHTML)}
      >
        oddlysatisfying
      </button>
    </div>
  );
}

export default Categories