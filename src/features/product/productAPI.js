export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO : We will not hardcode server url here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByFilter(filter) {
  //TODO : handle multi filter values.
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  console.log("queryString", queryString);

  return new Promise(async (resolve) => {
    //TODO : We will not hardcode server url here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
