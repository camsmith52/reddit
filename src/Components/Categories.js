import React from "react";
import AuthContext from "../AuthContext";
import { useContext } from "react";

const Categories = ({ setSearch }) => {
  const auth = useContext(AuthContext);

  const subReddits = auth.data.map((item) => {
    return (
      <button
        key={item.data.id}
        className="ui button"
        onClick={(e) => {
          auth.setSearch(item.data.subreddit);
          auth.setSubRedditClicked(true);
        }}
      >
        {item.data.subreddit}
      </button>
    );
  });
  return (
    <div>
      <h3>Subreddits</h3>
      {auth.subRedditClicked ? (
        <button
          onClick={() => {
            
            // auth.setSearchInBar(null);
            auth.setSearch('popular');
            auth.setSubRedditClicked(false);
          }}
        >
          Go back
        </button>
      ) : (
        subReddits
      )}
    </div>
  );
};

export default Categories;
