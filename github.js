class GitHub {
  constructor() {
    this.client_id = "59282dfd65bfe81ffc75";
    this.client_secret = "44d10e0926684a6cdc25034c39a84715b74999da";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return { profile, repos }; //same as profile: profile -> only es6
  }
}
