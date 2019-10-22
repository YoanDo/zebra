import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from 'react-moment';

import {
  ArticlesWrap,
  Article,
  Articles,
  Illustration,
  TextArea,
  Title
} from './styles'

export default function AllPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://test79053229.000webhostapp.com/wp-json/sections/v1/post")
      .then(result => setData(result.data));
  }, []);


  return (
    <ArticlesWrap>
      <h1>actus</h1>
      <Articles>
        {
          data.map((post, index) =>
            <Article key={index}>
                <Illustration background={post.acf.image} alt={post.post_title} />
              <TextArea>
                <Title>
                  <h3>{post.post_title}</h3>-
                  <p><Moment format="DD/MM/Y">{post.post_date}</Moment></p>
                </Title>
                <p>{post.acf.content}</p>
              </TextArea>
            </Article>
          )
        }
      </Articles>
    </ArticlesWrap >
  );
}
