// get all cars
export const loadCarList = async () => {
  const output = {
    success: false,
    cars: [],
  };

  await fetch("http://localhost:9090/api/v1/cars", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      accept: "*/*",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(async (res) => {
      if (res.status === 302) {
        const result = await res.json();
        output.success = true;
        output.cars = result;
      }
    })
    .catch(() => {
      console.log("an error accured");
    });

  return output;
};


// delete car
export const deleteCar = async (brand) => {
  const output = {
    success: false,
    // cars: [],
  };

  await fetch("http://localhost:9090/api/v1/deletecar", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      accept: "/",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      brand: brand,
    },
  })
    .then(async (res) => {
      if (res.status === 200) {
        // const result = await res.json();
        output.success = true;
        // output.cars = result;
      }
    })
    .catch(() => {
      console.log("an error accured");
    });

  return output;
};

// to add car
export const addCar = async (car) => {
  const output = {
    success: false,
    cars: [],
  };

  await fetch("http://localhost:9090/api/v1/addcar", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      accept: "/",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(car),
  })
    .then(async (res) => {
      const parsed = await res.json();
    })
    .catch(() => {
      console.log("an error accured");
    });

  return output;
};


// update car
export const updateCar = async (carName, car) => {
  const output = {
    success: false,
    cars: [],
  };

  await fetch("http://localhost:9090/api/v1/updatecar", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      accept: "/",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      brand: carName,
    },
    body: JSON.stringify(car),
  })
    .then(async (res) => {
      const parsed = await res.json();
    })
    .catch(() => {
      console.log("an error accured");
    });

  return output;
};

