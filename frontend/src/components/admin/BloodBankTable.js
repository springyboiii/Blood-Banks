import { useEffect, useState } from "react";
import Axios from "axios";
const BloodBankTable = () => {
  // let { bloodBankList } = props;
  const [bloodBankList, setBloodBankList] = useState([]);
  useEffect(() => {
    return () => {
      Axios.get("https://blood-bank-g2.herokuapp.com/dashboard").then((response) => {
        setBloodBankList(response.data);
      });
    };
  }, []);
  // useEffect(() => {
  //   var filter, table, tr, td, i, txtValue;
  //   var rowList = [];
  //   filter = data.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table.getElementsByTagName("tr");

  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td");
  //     for (let j = 0; j < td.length - 2; j++) {
  //       let element = td[j];
  //       if (element) {
  //         txtValue = element.textContent || element.innerText;
  //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //           if (!rowList.includes(i)) {
  //             rowList.push(i);
  //           }
  //         }
  //       }
  //     }
  //   }

  //   for (let index = 1; index < tr.length; index++) {
  //     if (rowList.includes(index) && tr[index]) {
  //       tr[index].style.display = "";
  //     } else {
  //       tr[index].style.display = "none";
  //     }
  //   }
  // }, [data]);
  return (
    <>
      <div>
        <h1 className="h1" style={{ textAlign: "center" }}>
          Dashboard
        </h1>
        <div className="row">
          <div className="col-1"></div>
        </div>
        <table id="myTable">
          <thead>
            <tr className="header">
              <th style={{ width: "25%" }}>Id</th>
              <th style={{ width: "25%" }}>Name</th>
              <th style={{ width: "25%" }}>Username</th>
              <th style={{ width: "25%" }}>Location</th>
              <th style={{ width: "25%" }}>Contact</th>
              {/* <th style={{ width: "5%" }}></th>
              <th style={{ width: "5%" }}></th> */}
            </tr>
          </thead>
          <tbody>
            {bloodBankList &&
              bloodBankList.map((bloodBank) => {
                return (
                  <tr key={bloodBank._id}>
                    <td>{bloodBank.ID}</td>
                    <td>{bloodBank.name}</td>
                    <td>{bloodBank.username}</td>
                    <td>{bloodBank.address}</td>
                    <td>{bloodBank.contact_no}</td>
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
