import { getAllSearches } from "../services/JobsApi";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Searches = () => {
  const [searches, setSearches] = useState([]);

  const renderTableHeader = () => {
    return (
      <>
        {searches && searches.length > 0 && (
          <tr>
            <th>IP</th>
            <th>Description</th>
            <th>Location</th>
            <th>Search made from </th>
            <th>Search date</th>
          </tr>
        )}


      </>
    );
  };

  const renderTableBody = () => {
    return (
      <>
        {searches && searches.map((search) => (
          <tr key={search._id} className="job-row">
            <td>{search.ipAddress}</td>
            <td>{search.description}</td>
            <td>{search.location}</td>
            <td>
              {search.geoLocation.city} - {search.geoLocation.region} -{" "}
              {search.geoLocation.country}
            </td>
            <td>{new Date(search.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </>
    );
  };

  const renderZeroRows= () => {
    return(
      <>
      {searches && searches.length === 0 && <h4>No rows to be shown</h4>}
      </>
    )
  }


  useEffect(() => {
    async function fetchData() {
      const searchesResponse = await getAllSearches();
      setSearches(searchesResponse);
    }

    fetchData();
  }, []);


  return (
    <div className="container center">
      <Link to={{ pathname: "/"}}> Back</Link>
      <div>
        <h3>Search Results</h3>
        <h5>
          {searches && searches.length > 0 ? `${searches.length} searches found` : ""}
        </h5>
      </div>
      <table className="styled-table">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
      {renderZeroRows()}
    </div>
  );
};

export default Searches;
