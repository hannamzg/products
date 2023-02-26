import axios from "axios";

export const selectProductByCategories =  async(categories) => {
  console.log(categories);

  const res = await axios.get(`http://localhost:5000/api/selectProductByCategories/${categories}`);

  return res
};
