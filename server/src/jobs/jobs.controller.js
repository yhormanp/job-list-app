
import {getListOfJobs} from '../services/jobsRepository.service'

const getJobs = async (req, res, next) => {
    try{
        const {location, jobDescription, geoLocationData} = req.body.data;
        const response = await getListOfJobs(location, jobDescription, geoLocationData);
        res.status(200).send(response);
    } catch (err){
        next(err);
    }
    
}

export default getJobs;