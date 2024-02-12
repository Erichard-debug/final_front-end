export const APIkey = "99290afca09d43ecac253e84fb3962f2";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const currentDate = new Date();

export const parseCurrentDate =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  currentDate.getDate().toString().padStart(2, "0");

const previousWeek = new Date();
previousWeek.setDate(currentDate.getDate() - 7);

export const parsePreviousWeek =
  previousWeek.getFullYear() +
  "-" +
  (previousWeek.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  previousWeek.getDate().toString().padStart(2, "0");

export const newsApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news"
    : "https://newsapi.org";
