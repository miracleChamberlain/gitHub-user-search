//init github
const github = new Github;



const ui = new UI;

//search input

const searchUser = document.getElementById('searchUser');

//search input eventlistener

searchUser.addEventListener('keyup', (e) =>{
  //get input
  const userText = e.target.value;

  if (userText !=='') {
    //make https call
    github.getUser(userText)
    .then(data =>{
      if (data.profile.message === 'Not Found') {


      //show alart

      //  ui.showAlert('User not found', 'alert alert-danger');

      }else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }else {
    //clear profile
    ui.clearProfile();
  }
});
