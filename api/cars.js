export const loadCarList = async () => {

    const output = {
      success: false,
      cars: [],
    };
  
    await fetch("http://localhost:9090/api/v1/cars", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem('access_token'),
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