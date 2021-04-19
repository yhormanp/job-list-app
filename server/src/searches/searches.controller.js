const { getAllSearches } = require("../services/searchesRepository.service");

const getSearches = async (req, res, next) => {
    try {
        const responseSearches = await getAllSearches();
        res.status(200).send(responseSearches);
    } catch (error) {
        next(error);
    }
}


export default getSearches;