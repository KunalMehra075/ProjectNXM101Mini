let form = document.getElementById("signup-form");
let loader = document.getElementById("spinner");
window.addEventListener("load", () => {
  swal("Welcome to Signup!");
});

form.addEventListener("submit", (e) => {
  loader.style.display = "block";
  e.preventDefault();
  let pass = form.pass.value;
  let conf = form.conf.value;
  if (pass !== conf) {
    swal("ERROR!", "confirm password field do not match!", "error");
    loader.style.display = "none";
    return;
  }
  if (pass.length < 8) {
    swal("ERROR!", "Password minimum length shoud be 8 characters.", "info");
    loader.style.display = "none";
    return;
  }
  let obj = {
    name: form.name.value,
    email: form.email.value,
    dob: form.dob.value,
    role: form.role.value,
    location: form.location.value,
    password: form.pass.value,
    active: true,
  };
  PostingUser(obj);
});
async function PostingUser(obj) {
  try {
    let res = await fetch("http://localhost:4500/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (res.ok) {
      let user = await res.json();
      console.log("User Added", user);
      swal("Done!", "SignUp Successfull!", "success");
      loader.style.display = "none";
    } else {
      console.log(res.json());
    }
  } catch (error) {
    swal("ERROR!", "Cannot SignUp!", "error");
    console.log(error);
    loader.style.display = "none";
  }
}
