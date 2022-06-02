import { useParams, Link } from "react-router-dom";
import "./styles/admin.css";
import "./styles/update.css";
const Upadate = ({ bloodBankList }) => {
  const { id } = useParams();
  let getFilter = bloodBankList.filter(
    (bloodBank) => Number(id) === bloodBank.id
  );
  const isAvailble = getFilter.length === 1 ? true : false;
  return (
    <>
      <div className="container align-left">
        <div className="centerBox">
          {isAvailble && (
            <div>
              <form>
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="bloodBankId">Blood Bank Account Id</label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control input"
                        id="bloodBankId"
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
                      <label htmlFor="bloodBankName">Blood Bank Name</label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control input"
                        id="bloodBankName"
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
                      <label htmlFor="bloodBankLocation">
                        Blood Bank Location
                      </label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control input"
                        id="bloodBankLocation"
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
                      <label htmlFor="bloodBankcontactNumber">
                        Blood Bank contact
                      </label>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control input"
                        id="bloodBankcontactNumber"
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
                  <div className="col-2"></div>
                  <div className="col-6">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: "150%" }}
                    >
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
              <h4 className="h4" style={{ textAlign: "center" }}>
                This blood bank id number {id} isn't available!!!
              </h4>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-5">
                  <Link
                    to="/admin/dashboard"
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

export default Upadate;
