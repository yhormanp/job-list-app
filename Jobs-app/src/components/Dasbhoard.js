import { Link } from "react-router-dom";
import FilterJobs from "./FilterJobs";
import Results from "./Results";
import "./Jobs.scss";

const Dasbhoard = ({ jobs, onSearchAction, loading }) => {
  const renderMenu = () => {
    return (
      <div className="menu">
        <ul>
          <li>
            <Link to={"/"}> Job list</Link>
          </li>
          <li>
            <Link to={"/searches"}>Searches made</Link>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div className="container center">
      {renderMenu()}
      <div className="banner">Looking for a new challenge?</div>
      <div className="filters">
        <p className="searchTitle">Search Openings</p>
        <FilterJobs onSearch={onSearchAction}></FilterJobs>
      </div>
      <Results jobs={jobs} loading={loading}></Results>
    </div>
  );
};

export default Dasbhoard;
