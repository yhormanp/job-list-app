import { Link } from "react-router-dom";

const Results = ({ jobs, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const renderTableHeader = () => {
    return (
      <>
        {jobs && jobs.length > 0 && (
          <tr>
            <th>Job title</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
        )}
      </>
    );
  };

  const renderTableBody = () => {
    return (
      <>
        {jobs && jobs.map((job) => (
          <tr key={job.id} className="job-row">
            <td>
              <Link to={{ pathname: "/description", state: job }}>
                {job.title}
              </Link>
            </td>
            <td>{job.company}</td>
            <td>{job.location}</td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <div>
      <div>
        <h3>Search Results</h3>
        <h5>{jobs && jobs.length > 0 ? `${jobs.length} job(s) found` : ""}</h5>
      </div>
      <table className="styled-table">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Results;
