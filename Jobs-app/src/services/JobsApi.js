import axios from "axios"
import {
    BASE_URL
} from "../config";

const getAllJobs = async (location, jobDescription, geoLocationData) => {
    const configRequest = {
        data: {
            location: location,
            jobDescription: jobDescription,
            geoLocationData: geoLocationData
        }
    }
    const {
        data
    } = await axios.post(`${BASE_URL}/jobs`, configRequest)
    return data;
}


const getAllSearches = async () => {
    const {
        data
    } = await axios.get(`${BASE_URL}/searches/all`)
    return data;
}

const getGeoLocation = async () => {
    const {
        data
    } = await axios.get('https://ipapi.co/json/');
    return data;
}

export {
    getAllJobs,
    getGeoLocation,
    getAllSearches
}