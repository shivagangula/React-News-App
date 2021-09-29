import { useParams } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import axios from 'axios'
import ListView from "./ListView";
import FilterBar from "./FilterBar";
/* import Gmap from "./Gmap";
 */
import HeaderSearch from "./HeaderSearch";



const PropResults = () => {
  const { search_queary } = useParams();
  const [data, setData] = useState();
  
  const NEWS_API =
    "https://newsapi.org/v2/everything?q="+search_queary+"&from=2021-09-28&sortBy=popularity&apiKey=66de64a38f7f484c99ce16f6432d28d7";

  useEffect(() => {
    axios
      .get(NEWS_API)
      .then((res) => {
        console.log(res.data)
        setData(res.data.articles)
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <HeaderSearch></HeaderSearch>
      <FilterBar></FilterBar>
      <ListView data={data} ></ListView>
    </div>
  );
};

export default PropResults;
