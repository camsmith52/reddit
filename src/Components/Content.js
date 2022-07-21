import React, { useContext, useEffect } from "react";
import reddit from "../reddit";
import AuthContext from "../AuthContext";
import redditpic from "../images/reddit.jfif";

const Content = () => {
  

  const auth = useContext(AuthContext);
  let content;

  useEffect(() => {
    const response = async () => {
      await reddit
        .get(`/search.json`, {
          params: {
            limit: 10,
            type: 'link',
            t: 'day',
            sort: 'new',
            q: auth.searchInBar,
            
          },
        })
        .then((res) => auth.setData((prev) => res.data.data.children));
    };
    response();
    /* eslint-disable */
  }, [auth.searchInBar]);

  useEffect(() => {
    console.log('useeffect running')
    const response = async () => {
      await reddit
        .get(`/r/${auth.search}.json`, {})
        .then((res) => auth.setData((prev) => res.data.data.children));
    };
    response();
    /* eslint-disable */
  }, [auth.search]);
  
  

  content = auth.data.map((ele) => {
    return (
      <div className="ui divided items" key={ele.data.id}>
        <div className="item">
          <div className="ui small image">
            <img
              alt={ele.data.id}
              src={
                ele.data.thumbnail.length > 10 ? ele.data.thumbnail : redditpic
              }
            />
          </div>

          <div
            
            className="middle aligned content"
          >
            <a href={ele.data.url} target="blank">
              {ele.data.title}
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      
    >
      {content}
    </div>
  );
};

export default Content;
