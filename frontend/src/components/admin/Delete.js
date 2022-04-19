import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/admin.css";
const Delete = ({ bloodBankList }) => {
  const { id } = useParams();
  let getFilter = bloodBankList.filter(
    (bloodBank) => Number(id) === bloodBank.id
  );
  const isAvailble = getFilter.length === 1 ? true : false;
  return (
    <>
      <div className="container">
        <div className="centerBox">
          {isAvailble && (
            <div>
              <h4>Are you sure , you want to delete id number {id} account?</h4>
              <br />
              <div className="row">
                <div className="col-3"></div>
                <div className="col-2">
                  <Link to="/admin/dashboard" className="btn btn-danger">
                    Yse,I want
                  </Link>
                </div>
                <div className="col-2"></div>
                <div className="col-3">
                  <Link to="/admin/dashboard" className="btn btn-info">
                    No
                  </Link>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          )}
          {!isAvailble && (
            <div>
              <h4>This blood bank id number {id} isn't available!!!</h4>
              <br />
              <div className="row">
                <div className="col-5"></div>
                <div className="col-3">
                  <Link to="/admin/dashboard" className="btn btn-info">
                    Go back
                  </Link>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Delete;
