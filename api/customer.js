// to get all customers
export const loadCustomerList = async () => {
    const output = {
      success: false,
      customers: [],
    };

    await fetch("http://localhost:9090/api/v1/customers", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem('access_token'),
        accept: "*/*",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          const result = await res.json();
          output.success = true;
          output.customers = result;
        }
      })
      .catch(() => {
        console.log("an error accured");
      });

    return output;
  };
﻿
