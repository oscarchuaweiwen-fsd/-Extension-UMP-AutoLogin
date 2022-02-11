chrome.storage.sync.get(["username", "password", "role"], (result) => {

  
  var ecomUsername = document.getElementById("form-username");
  var ecomPassword = document.getElementById("form-password");
  var ecomRole = document.getElementById("lvl");
    var button = document.getElementById("js-btn");

  if (result.role === "Pelajar") {
    ecomRole.selectedIndex = "1";

  }

  if(result.role === "Staf"){
      ecomRole.selectedIndex = "0";
   
  }

  ecomUsername.value = result.username;
  ecomPassword.value = result.password;


  setInterval(()=>{
    button.click()
  },500)
});





