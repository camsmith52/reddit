import React, { useContext, useEffect, useState } from "react";
import reddit from "../reddit";
import AuthContext from "../AuthContext";
import redditpic from "../images/reddit.jfif";

const Content = () => {
  const [data, setData] = useState([]);

  const auth = useContext(AuthContext);
  let content;
  useEffect(() => {
    const response = async () => {
      await reddit
        .get(`${auth.search}.json`, {})
        .then((res) => setData((prev) => res.data.data.children));
    };

    let timeoutId;
    if (auth.search && !data.length) {
      response();
    } else {
      timeoutId = setTimeout(() => {
        if (auth.search) {
          response();
        }
      }, 1500);
    }

    return () => {
      clearTimeout(timeoutId);
    };

    /* eslint-disable */
  }, [auth.search]);
  console.log(data);

  content = data.map((ele) => {
    return (
      <div className="ui divided items" key={ele.data.id}>
        <div className="item">
          <div className="ui small image">
            <img alt={ele.data.id} src={ele.data.thumbnail.length>10 ? ele.data.thumbnail: redditpic } />
          </div>

          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
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

  return <div  style={{
              width: "60%"}}>{content}</div>;
};

export default Content;
