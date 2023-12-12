export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO : We will not hardcode server url here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByFilter({ filter, sort, pagination }) {
  //filter = {category : ["smartphones","laptops"], brand : ["apple", "samsung"]}
  //sort = {_sort : Rating, _order : "desc"}
  //pagination = {_page:1,_limit=10}
  let queryString = "";
  for (let key in filter) {
    const currentFilterValues = filter[key];
    let count = 0;
    while (count < currentFilterValues.length) {
      queryString += `${key}=${currentFilterValues[count]}&`;
      count = count + 1;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  console.log("queryString", queryString);

  return new Promise(async (resolve) => {
    //TODO : We will not hardcode server url here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: totalItems } });
  });
}
