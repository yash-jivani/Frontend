import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url);
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await response.json();
    // console.log(data);

    if (response.ok === false) {
      throw new Error(`${data.message} (${response.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
