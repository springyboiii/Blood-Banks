import { Link } from "react-router-dom";
import "./NotFoundPage.css";
const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        <div className="row center">
          <div className="col-4"></div>
          <div className="col-6 text-center text-danger">
            <h1 className="h1">404</h1>
            <br />
            <h2>NOT FOUND</h2>
            <br />
            <h5>
              The Page you are looking for doesn't exist or an other error
              occured Go to
              <br />
              <Link to="/"> Home page.</Link>
            </h5>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
