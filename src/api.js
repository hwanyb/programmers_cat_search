// const api = {
//   fetchCats: keyword => {
//     return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then(res =>
//       res.json()
//     );
//   }
// };

export const request = async (type, payload) => {
  const API_END_POINT =
    "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats";
  let API_SUB_POINT = "";
  switch (type) {
    case "search":
      API_SUB_POINT = `/search?q=${decodeURIComponent.payload}`;
      break;
    case "random":
      API_SUB_POINT = "/random50";
      break;
    default:
      API_SUB_POINT = `/${payload}`;
  }
  const response = await fetch(`${API_END_POINT}${API_SUB_POINT}`);
  switch (response.status / 100) {
    case 3:
      return `Redirects Error with status code ${response.status}`;
    case 4:
      return `Client Error with status code ${response.status}`;
    case 5:
      return `Server Error with status code ${response.status}`;
    default:
      return response.json();
  }
};
