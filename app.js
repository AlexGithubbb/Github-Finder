// init Github
const github = new Github();
// init UI
const ui = new UI();

// get the user input element
const userInput = document.getElementById('searchUser');
// add 'keyup' event listener
userInput.addEventListener('keyup', e =>{
  // Get input text
  const userText = e.target.value;
  // console.log(userText);
  if( userText !== ''){
    // get data from Github API (go to github.js)
    github.getUser(userText) // this one returns an promise so we needa then and catch
    .then(data =>{
      if(data.profile.message === 'Not Found'){
        ui.showAlert('User is not found', 'alert alert-danger');
      }else{
        // show the profile
        ui.showProfile(data.profile);
        // // show the repos
        ui.showRepos(data.repos);
      }
    })
  }else{
    // clear the profile
    ui.clearProfile();
  }
})