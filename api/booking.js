// to cancel order
export const cancelOreder = async (id) => {
  const output = {
    success: false,
    cars: [],
  };

  await fetch("http://localhost:9090/api/v1/cancelorder", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      accept: "*/*",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "",
      id: id,
    },
  })
    .then(async (res) => {
      const parsed = await res.json();
      console.log(res);
      console.log(parsed);
    })
    .catch(() => {
      console.log("an error accured");
    });

  return output;
};

// to got customer's orders list
export const listCustomerOrders = async (customerName) => {
  const output = {
    success: false,
    bookings: [],
  };

  await fetch("http://localhost:9090/api/v1/myorders", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      accept: "*/*",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "",
      name: customerName,
    },
  })
    .then(async (res) => {
      if (res.status === 200) {
        const parsed = await res.json();
        output.success = true;
        output.bookings = parsed;
      }
    })
    .catch(() => {
      console.log("an error accured");
    });

  return output;
};
