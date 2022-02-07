//Initiation
const github = new GitHub();
const ui = new UI();

//Search User
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", (e) => {
  //Get Username
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show Alert
        ui.showAlert("User not found!", "alert alert-danger");
        ui.clearProfile();
      } else {
        //Display User
        // console.log(data);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
