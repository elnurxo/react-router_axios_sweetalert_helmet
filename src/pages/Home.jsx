import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import MyCard from "../components/MyCard";

export const getData = async() =>{
    return await axios.get('http://localhost:3000/data').then((resp) => {
        return resp.data;
    });
}
const Home = () => {
  const [data, setData] = useState(null);
  const[loading,setLoading] = useState(true);
  const getInnerData = async() => {
    setData(await getData());
    setLoading(false);
  }
  useEffect(() => {
    getInnerData();
  }, []);

  return (
    <>
     <Helmet>
            <title>Home Page</title>
            <meta name="home" content="This is Home Page" />
        </Helmet>
      {loading ? <Loading/> : <Grid container spacing={2} style={{marginTop:"30px"}}>
           {
            data && data.map((item)=>{
                return <MyCard key={item.id} data={item}/>
            })
           }
      </Grid>}
      
    </>
  );
};

export default Home;