import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../Layout/Footer/Footer";

function Detail() {
  const [post, setPost] = useState({});
  let { _id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:7000/users/$(_id)`).then((response) => {
      setPost(response.data);
    });
  }, [_id]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <img src={post.image} alt="cards" />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Footer/>
    </div>
  );
}

export default Detail;
