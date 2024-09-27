import { useState, useEffect } from "react";
import axios from "../api/axios";

const CollegeList = () => {

  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('/colleges');
        setColleges(response.data)
      } catch (error) {
        console.log("Error Fetching Colleges:", error)
      }
    };
    fetchColleges()
  }, [])


  return (
    <div className="">
      <h1>Colleges</h1>
      <ul>
        {colleges.map(college => (
          <li key={college}>{college}</li>
        ))}
      </ul>
    </div>
  )
}

export default CollegeList