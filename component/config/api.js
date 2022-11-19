import React from 'react'
import axios from 'axios';

export const API = axios.create({
  baseURL:
    "https://api.v2.kontenbase.com/query/api/v1/5f90ef4d-7ea5-4cca-b940-f36d12fa3a21/",
});

  export const setAuthToken = (token) => {
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.commin["Authorization"];
    }
  };