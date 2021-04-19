import { useState, useEffect } from "react";
import Select from "./Forms/Select";

const FilterJobs = ({ onSearch }) => {
  const [locations] = useState([
    { label: "Chicago", value: "Chicago" },
    { label: "San Francisco", value: "San Francisco" },
    { label: "Phoenix", value: "Phoenix" },
    { label: "London", value: "London" },
    { label: "Beijing", value: "Beijing" },
    { label: "Paris", value: "Paris" },
  ]);

  const [jobDescriptions] = useState([
    { label: "Javascript", value: "Javascript" },
    { label: "Java", value: "Java" },
    { label: "Python", value: "Python" },
    { label: "React", value: "React" },
    { label: "Ruby", value: "Ruby" },
    { label: "Go", value: "Go" },
  ]);

  let [location, setLocation] = useState("Select...");
  let [jobDescription, setJobDescription] = useState("Select...");

  const onChangeLocation = (e) => {
    setLocation(e.currentTarget.value);
  };

  const onChangeJobDescription = (e) => {
    setJobDescription(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    onSearch(location, jobDescription);
  };

  useEffect(() => {
   async function fetchJobsList() {
    onSubmit(location, jobDescription);
   }
   fetchJobsList();
  }, [location,jobDescription])

  return (
    <form onSubmit={onSubmit}>
      <Select
        listItems={locations}
        onChangeAction={onChangeLocation}
        defaultOption="Select..."
        fieldName="Location"
        value={location}
      ></Select>
      <Select
        listItems={jobDescriptions}
        onChangeAction={onChangeJobDescription}
        defaultOption="Select..."
        fieldName="Job Description"
        value={jobDescription}
      ></Select>
      
    </form>
  );
};

export default FilterJobs;
