import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const BloodBankTable = (props) => {
  let { bloodBankList } = props;
  const [data, setData] = useState("");
  useEffect(() => {
    var filter, table, tr, td, i, txtValue;
    var rowList = [];
    filter = data.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (let j = 0; j < td.length - 2; j++) {
        let element = td[j];
        if (element) {
          txtValue = element.textContent || element.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            if (!rowList.includes(i)) {
              rowList.push(i);
            }
          }
        }
      }
    }
    console.log(rowList);
    for (let index = 1; index < tr.length; index++) {
      if (rowList.includes(index) && tr[index]) {
        tr[index].style.display = "";
      } else {
        tr[index].style.display = "none";
      }
    }
  }, [data]);
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Dashborad</h2>
        <div className="row">
          <div className="col-1">
            <label htmlFor="myInput">
              <i
                className="material-icons"
                style={{ marginLeft: "120%", marginTop: "50%" }}
              >
                search
              </i>
            </label>
          </div>
          <div className="col-11">
            <input
              type="text"
              id="myInput"
              onChange={(e) => {
                setData(e.target.value);
              }}
              placeholder="Search..."
              title="Type in a name"
            />
          </div>
        </div>
        <table id="myTable">
          <thead>
            <tr className="header">
              <th style={{ width: "25%" }}>Id</th>
              <th style={{ width: "25%" }}>Name</th>
              <th style={{ width: "25%" }}>Location</th>
              <th style={{ width: "25%" }}>contact</th>
              <th style={{ width: "5%" }}></th>
              <th style={{ width: "5%" }}></th>
            </tr>
          </thead>
          <tbody>
            {bloodBankList &&
              bloodBankList.map((bloodBank) => {
                return (
                  <tr key={bloodBank.id}>
                    <td>{bloodBank.id}</td>
                    <td>{bloodBank.name}</td>
                    <td>{bloodBank.location}</td>
                    <td>{bloodBank.contactNumber}</td>
                    <td>
                      <Link to={`/admin/dashboard/${bloodBank.id}/edit`}>
                        <i className="material-icons">edit</i>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/admin/dashboard/${bloodBank.id}/delete`}>
                        <i className="material-icons">delete</i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BloodBankTable;
