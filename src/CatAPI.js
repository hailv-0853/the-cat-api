import Request from "./Request";

export const getCatList = ({ params }) =>
  Request.get({
    url: "images/search",
    params
  });