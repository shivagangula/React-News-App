import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const Home = () => {
     let history = useHistory();
     const [searchParam, setsearchParam] = useState('')
     const search = (e) => { 
          e.preventDefault();
          history.push({pathname: '/prop_results/'+ searchParam});
      }
     const searchOnChange = (e) =>{
         setsearchParam(e.target.value)
      } 
     return (
          <div>
            <form action="#">
            <center><h1><label htmlFor="">Search Properties</label></h1>
             <br />
             <input onChange={searchOnChange} type="text" /></center>
             <button onClick={search} type="submit"></button>
            </form>
          </div>
     )
}

export default Home
