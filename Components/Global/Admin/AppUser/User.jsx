import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import Header from "../../Regular/Table/Header";
import Table from "./Table";

import { useStateContext } from "../../../../Context/index";

import { GET_ALL_APP_USER } from "../../../../Context/constants";

const User = ({}) => {
  const { CHECKI_IF_CONNECTED_LOAD, address } = useStateContext();
  const [appUsers, setAppUsers] = useState();
  const [appUsersCopy, setAppUsersCopy] = useState();

  const tableHead = [
    {
      name: "NAME",
    },
    {
      name: "ADDRESS",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const address = await CHECKI_IF_CONNECTED_LOAD();
      if (address) {
        GET_ALL_APP_USER().then((user) => {
          setAppUsers(user);
          setAppUsersCopy(user);
          console.log(user);
        });
      }
    };

    fetchData();
  }, [address]);

  //FILTER
  const onHandleSearch = (value) => {
    const filteredNFTS = appUsers.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setAppUsers(appUsersCopy);
    } else {
      setAppUsers(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (appUsers?.length && appUsersCopy.length) {
      setAppUsers(appUsersCopy);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <Header
          name={"DApp Users"}
          onHandleSearch={onHandleSearch}
          onClearSearch={onClearSearch}
        />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <Table
                    thead={tableHead}
                    name={"patient"}
                    tableData={appUsers}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
