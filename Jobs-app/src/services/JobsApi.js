import axios from "axios"
import {
    BASE_URL
} from "../config";

const getAllJobs = async (location, jobDescription, geoLocationData) => {
    try {
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
    } catch (error) {
        console.error('Error getting all Jobs: ', error);
    }
    
}


const getAllSearches = async () => {
    try {
        const {
            data
        } = await axios.get(`${BASE_URL}/searches/all`)
        return data;    
    } catch (error) {
        console.error('Error getting all searches: ', error);
    }
    
}

const getGeoLocation = async () => {
    try {
        const {
            data
        } = await axios.get('https://ipapi.co/json/');
        return data;    
    } catch (error) {
        console.error('Error getting geoLocation: ', error);
        
    }
    
}

export {
    getAllJobs,
    getGeoLocation,
    getAllSearches
}