import { useParams, Link } from "react-router-dom";
import "./styles/bloodBank.css";
import "./styles/edit.css";
const EditDonor = ({ donorList }) => {
  const { id } = useParams();
  let getFilter = donorList.filter((donor) => Number(id) === donor.id);
  const isAvailble = getFilter.length === 1 ? true : false;
  return (
    <>
      <div className="container">
        <div className="centerBox">
          {isAvailble && (
            <div>
              <form>
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="donorId">Donor Id</label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        id="donorId"
                        value={getFilter[0].id}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="donorName">Donor Name</label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        id="donorName"
                        value={getFilter[0].name}
                        onChange={(e) => {
                          getFilter[0].name = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="donorLocation">Donor Location</label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        id="donorLocation"
                        value={getFilter[0].location}
                        onChange={(e) => {
                          getFilter[0].location = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="donorcontactNumber">donor contact</label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        id="donorcontactNumber"
                        value={getFilter[0].contactNumber}
                        onChange={(e) => {
                          getFilter[0].contactNumber = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary">
                      Update id number {id} account details
                    </button>
                  </div>
                  <div className="col-4"></div>
                </div>
              </form>
            </div>
          )}
          {!isAvailble && (
            <div>
              <h4>This donor id number {id} isn't available!!!</h4>
              <br />
              <div className="row">
                <div className="col-4"></div>
                <div className="col-3">
                  <Link to="/bloodBank/dashboard" className="btn btn-info">
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

export default EditDonor;
