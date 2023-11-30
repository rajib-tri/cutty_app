import Axios from "axios";
import { getItem } from ".";

export async function getData(endpoint, params = {}) {
  const url = `${process.env.REACT_APP_BE}/${endpoint}`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getItem("userdata")?.access_token}`,
    },
    params: params,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Axios.get(url, config);
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
}

export async function postData(endpoint, data) {
  const url = `${process.env.REACT_APP_BE}/${endpoint}`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getItem("userdata")?.access_token}`,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Axios.post(url, data, config);
      resolve(result.data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export async function putData(endpoint, data) {
  const url = `${process.env.REACT_APP_BE}/${endpoint}`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getItem("userdata")?.access_token}`,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Axios.put(url, data, config);
      resolve(result.data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export async function deletData(endpoint, data = {}) {
  const url = `${process.env.REACT_APP_BE}/${endpoint}`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getItem("userdata")?.access_token}`,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Axios.delete(url, data, config);
      resolve(result.data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export async function createData(endpoint, data) {
  const url = `${process.env.REACT_APP_BE}/${endpoint}`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getItem("userdata")?.access_token}`,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Axios.post(url, data, config);
      resolve(result.data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}
