const GET_GIT_USER = `https://api.github.com/users/karanShinde7`;

async function getGitUser() {
  try {
    // fetch will return response in promise object
    const getUser = await fetch(GET_GIT_USER);
    // Get data in json format
    const userData = await getUser.json();
    console.log("User Data ", userData);
  } catch (err) {
    console.log(err);
  }
}

getGitUser();
