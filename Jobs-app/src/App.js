import './App.scss';
import {getAllJobs, getGeoLocation} from './services/JobsApi';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react'
import Dasbhoard from './components/Dasbhoard';
import JobDescription from './components/JobDescription';
import Searches from './components/Searches';
function App() {

  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(false)
  // const [currentPage, setcurrentPage] = useState(1);
  // const [jobsPerPage, setJobsPerPage] = useState(50)


  const onSearchAction = async (location, jobDescription) => {
    setloading(true);
    const responseGeoLocationData= await getGeoLocation();
    const responseJobs = await getAllJobs(location, jobDescription, { city: responseGeoLocationData.city, region: responseGeoLocationData.region, country: responseGeoLocationData.country_name, ip:responseGeoLocationData.ip});
    setjobs(responseJobs);
    setloading(false);
  }

  return (

    <Router>
      <Switch>
        <Route exact path="/" >
          <Dasbhoard onSearchAction= {onSearchAction} jobs={jobs} loading= {loading}></Dasbhoard>
        </Route>
        <Route path="/description" component={JobDescription}></Route>
        <Route path="/searches" component={Searches}></Route>
        
      </Switch>
     
    </Router>
  );
}

export default App;
