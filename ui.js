class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `<div class='card card-body mb-3 bg-transparent'>
        <div class='row'>
            <div class='col-md-3'>
                <img class='img-fluid mb-2' src='${user.avatar_url}' />
                <a href='${user.html_url}' target='_blank' class='btn btn-success btn-block mb-4' >View Profile</a>
            </div>
            <div class='col-md-9'>
                <span class='badge badge-primary p-2' >Public Repos: ${user.public_repos}</span>
                <span class='badge badge-warning p-2' >Public Gists: ${user.public_gists}</span>
                <span class='badge badge-success p-2' >Followers: ${user.followers}</span>
                <span class='badge badge-info p-2' >Following: ${user.following}</span>

                <br/><br/>

                <ul class='list-group'>
                    <li class='list-group-item'>Company: ${user.company}</li>
                    <li class='list-group-item'>Website/Blog: ${user.blog}</li>
                    <li class='list-group-item'>Location: ${user.location}</li>
                    <li class='list-group-item'>Created at: ${user.created_at}</li>
                </ul>
            </div>
        </div>    
    </div>
    <h3 class='page-heading mb-3'>Latest Repos</h3>
    <div id='repos'></div>
    `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
            <div class='card card-body mb-2 >
                <div class='row>
                    <div class='col-md-6' >
                        <a href='${repo.html_url} target='_blank'>${
        repo.name
      }</a>
                    </div>
                    <div class='col-md-9' >
                        <span class='p-2 badge badge-primary m-1' >Stars: ${
                          repo.stargazers_count
                        }</span>
                        <span class='p-2 badge badge-success m-1' >Watchers: ${
                          repo.watchers_count
                        }</span>
                        <span class='p-2 badge badge-warning m-1' >Forks: ${
                          repo.forks_count
                        }</span>
                        <span class='p-2 badge badge-info m-1' >Last Updated: ${new Date(
                          repo.updated_at
                        )}</span>
                    </div>
                </div>
            </div>
          `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  //Send alert message
  showAlert(message, className) {
    //Clear Alert
    this.clearAlert();

    //create element div
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));

    //Get Parent
    const container = document.querySelector(".searchContainer");
    //Get Searchbox
    const search_box = document.querySelector(".searchUser");

    //Insert message div
    container.insertBefore(div, search_box);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
