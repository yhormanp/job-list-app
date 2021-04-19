const Search = require("../models/search")

exports.saveNewSearch = async (location, jobDescription, geoLocationData) => {
    const newSearch = new Search({
        description: jobDescription === 'Select...' ? 'default': jobDescription,
        location: location  === 'Select...' ? 'default': location,
        ipAddress: geoLocationData.ip,
        geoLocation: {
            city: geoLocationData.city,
            region: geoLocationData.region,
            country: geoLocationData.country,
        }
    });

    newSearch.save()
    .then((result) => {
        console.log('new search has been saved: ', result);
    })
    .catch((err)=> {
        console.log('error saving data: ', err)
        throw new Error (err);
    })
}


exports.getAllSearches = async () => {
    const responseSearches = await Search.find ({});
    return responseSearches;
}