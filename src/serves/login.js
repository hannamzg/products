import axios from "axios";

export async function login(inputs) {
    const res = await axios.post("http://localhost:5000/api/authUsers/login",inputs,{
      withCredentials:true
    });

    return res;
}
