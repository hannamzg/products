export function logOut() {
  fetch("http://localhost:5000/api/authUsers/logout", {
    method: "POST",
    credentials: "include",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  localStorage.removeItem("UsersProduct");
}
