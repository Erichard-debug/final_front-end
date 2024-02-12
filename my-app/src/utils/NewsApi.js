import {
    APIkey,
    checkResponse,
    parseCurrentDate,
    parsePreviousWeek,
    newsApiUrl,
  } from "../utils/constants";

export const getSearchResults = (keyword) => {
    return fetch(
      `${newsApiUrl}/v2/everything?q=${keyword}&from=${parsePreviousWeek}&to=${parseCurrentDate}&pageSize=100&apiKey=${APIkey}`
    ).then(checkResponse);
  };

 