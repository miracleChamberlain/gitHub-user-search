class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-6">
    <img class="imag-fluid mb-2 " src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-secondary btn-block">View profile</a>
    </div>

    <div class="col-md-6">
    <span class="badge badge-secondary ml-2">Public Repos:${user.public_repos} </span>
    <span class="bage badge-primary ml-2">Public Gists:${user.public_gists} </span>
    <span class="badge badge-info ml-2">Followers:${user.followers} </span>
    <span class="badge badge-success ml-2">Following:${user.following} </span>
    <br><br>

    <ul class="list-group">
    <li class="list-group-item">Company:${user.company} </li>
    <li class="list-group-item">Website/Blog:${user.blog} </li>
    <li class="list-group-item">Location:${user.location} </li>
    <li class="list-group-item">Memeber Since:${user.created_at} </li>

    </ul>


    </div>


    </div>
    </div>

    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
  }
  showRepos(repos){
    let output ="";
    repos.forEach(function (repo) {
      output +=`
      <div class="card card-body">
      <div class="row">

      <div class="col-md-6">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>

      </div>
      <div class="col-md-6">
      <span class="badge badge-secondary ml-2">Stars:${repo.stargazers_count} </span>
      <span class="bage badge-primary ml-2">Watchers:${repo.watchers} </span>
      <span class="badge badge-info ml-2">Forks:${repo.form_count} </span>


      </div>



      </div>
      </div>

      `
    })
    //output repo
    document.getElementById('repos').innerHTML =output;
  }


  clearProfile(){
    this.profile.innerHTML = "";
  }
}
