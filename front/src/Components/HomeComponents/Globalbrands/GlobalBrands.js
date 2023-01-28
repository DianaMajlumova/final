import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Globalbrands.scss"
const baseURL = "http://localhost:7000/users";
function GlobalBrands() {
  const [post, setPost] = useState([]);

  function dataget() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }

  useEffect(() => {
    dataget();
  }, []);

  function datadelete(_id) {
    axios.delete(baseURL + "/" + _id).then(dataget);
  }

  return (
    <>
      <div className="cards_section">
        {post.map((e) => (
          <div className="cards">
            <div className="card">
              <img src={e.image} alt="card" />
              <h1>{e.title}</h1>
              <p>{e.description}</p>
              <Link to={`detail/${e._id}`}>
              <button>Detail</button>
            </Link>
            <button className="delete_btn"
              onClick={() => {
                datadelete(e._id);
              }}
            >
              Delete
            </button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default GlobalBrands;
