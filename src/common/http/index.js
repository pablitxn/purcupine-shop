import { BASE_URL } from "common/utils"

const fetchModule = async (
  url,
  method = "GET",
  payload,
  json = false,
  token = undefined,
) => {
  const type = json
    ? "application/json"
    : "application/x-www-form-urlencoded;charset=UTF-8";

  const reqBody = payload
    ? json
      ? JSON.stringify(payload)
      : new URLSearchParams(payload)
    : undefined;

  const reqHeader = token
    ? {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": type,
    }
    : {
      Accept: "application/json",
      "Content-Type": type,
    };
  const requestOptions = {
    method: method,
    headers: reqHeader,
    body: reqBody,
  };
  try {
    const response = await fetch(`${BASE_URL}${url}`, requestOptions);
    const textBody = await response.text();
    const data = textBody.length > 0 ? JSON.parse(textBody) : null;
    return { response, data };
  } catch (error) {
    console.log(`fetchModule error -> ${error}`);
    return error;
  }
};

export const httpModule = {
  async login(url, payload) {
    try {
      const { response, data } = await fetchModule(url, "POST", payload);
      return { response, data };
    } catch (error) {
      console.log(`httpModule.login error [LOGIN]-> ${error}`);
    }
  },
  async get(url, token) {
    try {
      const { response, data } = await fetchModule(url, "GET", undefined, false, token);
      return { response, data };
    } catch (error) {
      console.log(`httpModule.get error [GET]-> ${error}`);
    }
  },
  async put(url, payload, json = true, token) {
    try {
      const { response, data } = await fetchModule(url, "PUT", payload, json, token);
      return { response, data };
    } catch (error) {
      console.log(`httpModule.post error [PUT]-> ${error}`);
    }
  },
  async post(url, payload, json = true, token) {
    try {
      const { response, data } = await fetchModule(url, "POST", payload, json, token);
      return { response, data };
    } catch (error) {
      console.log(`httpModule.post error [POST]-> ${error}`);
    }
  },
}