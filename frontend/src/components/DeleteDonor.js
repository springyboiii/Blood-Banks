import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";

const DeleteDonor = ({ donorList }) => {
  const params = useParams();

  const deleteDonor = ()=>{
    Axios.delete(`https://blood-bank-g2.herokuapp.com/donour/delete/${params.id}`).then(()=>{
      window.location.href='/bank/viewDonours'
    });
  };

  let getFilter = donorList.filter((donor) => 1 === donor._id);
  const isAvailble = getFilter.length === 1 ? true : false;
  return (
    <>
      <div className="container">
        <div className="centerBox">
          {isAvailble && (
            <div>
              <h4>
                Are you sure , you want to delete id number {params.id} donor details?
              </h4>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-2">
                  <Link
                    to="/viewDonours"
                    className="btn btn-danger"
                    style={{ width: "150%" }}
                    onClick={deleteDonor}>
                    Yes,I want                    
                  </Link>
                </div>
                <div className="col-3"></div>
                <div className="col-3">
                  <Link
                    to="/viewDonours"
                    className="btn btn-info"  
                    style={{ width: "110%" }}
                  >
                    No
                  </Link>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          )}
          {!isAvailble && (
            <div>
              <h4>This donor id number {params.id} isn't available!!!</h4>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-5">
                  <Link
                    to="/viewDonours"
                    className="btn btn-info"
                    style={{ width: "150%" }}
                  >
                    Go back
                  </Link>
                </div>
                <div className="col-5"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DeleteDonor;
