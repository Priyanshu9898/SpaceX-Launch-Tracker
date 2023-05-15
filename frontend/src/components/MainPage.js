import React, { useEffect, useState } from 'react';
import {  Row, Col } from 'react-bootstrap';
import Filter from './Filter';
import Cards from './Cards';
import { launchURL } from '../utils/API';
import axios from "axios";

const MainPage = () => {

  const [filters, setFilters] = useState({
    launch_year: "",
    launch_success: "",
    land_success: "",
  });


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  

  useEffect(() => {

    const fetchFilterData = async () => {
      try{
  
        setLoading(true);
  
        console.log("hello")

        console.log(launchURL)
        const response = await axios.get(launchURL, { params: filters });
  
        console.log(response.data);

        if(response.data.success === true){
          setData(response.data.launchData);
        }
  
  
        setLoading(false);
  
  
      }
      catch (err){
        console.error("error")
      }
    }

    fetchFilterData();
}, [filters]);



  return (
  
      <Row>
        {/* Filter Sidebar */}
        <Col xs={12} md={4} lg={2} className="d-flex justify-content-center">
          {/* Your Filter Components Here */}
          <Filter filters={filters} setFilters={setFilters}/>
        </Col>

        {/* Launch Data */}
        <Col xs={12} md={8} lg={10} className="d-flex justify-content-center">
          {loading === true ? (<>
            <h1>Loading</h1>
          </>) : (<>
            <Cards data={data}/> 
          </>)}
          {/* <Cards data={data}/> */}
        </Col>
      </Row>

  )
}

export default MainPage