import { useLocation, useHistory , Link} from "react-router-dom";
const JobDescriptions = () => {
  
  let location = useLocation();
  const history = useHistory();
  const data = location.state;
  
  if(data === undefined){
    history.push('/');
  }


  return (
    <>
    { data !== undefined && (
    <div className="container center">
      <Link to={{ pathname: "/"}}> Back</Link>
      <div className="banner">
        <label> Overview </label>
      </div>
      <div className="details-job">
        <div >
          <label>Job Title: </label>
          <span>{data.title}</span>
        </div>
        <div>
          <label>Location: </label>
          <span>{data.location}</span>
        </div>
        <div>
          <label>Company: </label>
          <span>{data.company}</span>
        </div>
        <div>
          {/* <img src={data.company_logo} alt="company logo"></img> */}
        </div>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>
    </div>
    )}
    </>
  );
};

export default JobDescriptions;
