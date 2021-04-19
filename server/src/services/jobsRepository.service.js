import dotenv from 'dotenv';
import { saveNewSearch } from './searchesRepository.service';
const axios = require('axios').default;
dotenv.config();


exports.getListOfJobs = async function (location, jobDescription, geoLocationData){
    let additionalParams = location != "Select..."  ? `location=${location}&` : '';
    additionalParams += jobDescription != "Select..."  ? `description=${jobDescription}` : '';
    const { data } = await axios.get(`${process.env.GITHUB_JOB_LIST}?${additionalParams}`);
    const response = await saveNewSearch(location, jobDescription, geoLocationData);
    return data; 
    
}
