import React, { useContext, useEffect, useState } from "react";
import reddit from "../reddit";
import AuthContext from "../AuthContext";

const Content = () => {
  const [data, setData] = useState([]);

  const auth = useContext(AuthContext);
    let content
  useEffect(() => {
    console.log("first load");
    const response = async () => {
      await reddit
        .get(`${auth.search}.json`, {})
        .then((res) => setData((prev) => res.data.data.children));
    };
    response();
  }, [auth.search]);
  console.log(data)

 content = data.map((ele) => {
            return (
              <div key={ele.data.id}>
                {ele.data.title}
                <div>
                  <a href={ele.data.url} target='blank'>Link</a>
                </div>
              </div>
            );
          })
  
  return <div>{content}</div>;
};

export default Content;
