const axios = require("axios");
const config = require("./config");

async function getDB() {
  try {
    const response = await axios.get("https://gw.ittps.ru/db/isp");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
