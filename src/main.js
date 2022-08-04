const searchFormBtn = document.querySelector('#searchBtn');
const value = document.querySelector('#inputForm').value;
searchFormBtn.addEventListener('click', getUser)

const URL = "https://api.github.com/users/";

async function getUser() {
  
  userPreviewUser.innerHTML="";
  userPreviewDate.innerHTML=""
  userPreviewBio.innerHTML="";
  userPreviewRepos.innerHTML="";
  userPreviewFollowers.innerHTML="";
  userPreviewFollowing.innerHTML="";
  userPreviewSocial1.innerHTML="";
  userPreviewSocial2.innerHTML="";
  userPreviewSocial3.innerHTML="";
  userPreviewSocial4.innerHTML="";

  
  const value = document.querySelector("#inputForm").value;

  const res = await fetch(URL + value);
  const data = await res.json();

  console.log(data);

  userPreviewContent.classList.remove("inactive");

  const nombre = document.createElement("p");
  userPreviewUser.appendChild(nombre);
  nombre.innerHTML = data.name;

  const user = document.createElement("p");
  userPreviewUser.appendChild(user);
  user.innerHTML = "@"+data.login;

  const date = document.createElement("p");
  userPreviewDate.appendChild(date);
  date.innerHTML = data.created_at;

  const bio = document.createElement("p");
  userPreviewBio.appendChild(bio);
  bio.innerHTML = data.bio;

  const repos = document.createElement("span");
  userPreviewRepos.appendChild(repos);
  repos.innerHTML = "Repos";
  const numberRepos = document.createElement("p");
  userPreviewRepos.appendChild(numberRepos);
  numberRepos.innerHTML = data.public_repos;
  console.log(data.public_repos)

  const followers = document.createElement("span");
  userPreviewFollowers.appendChild(followers);
  followers.innerHTML = "Followers";
  const numberFollowers = document.createElement("p");
  userPreviewFollowers.appendChild(numberFollowers);
  numberFollowers.innerHTML = data.followers;

  const following = document.createElement("span");
  userPreviewFollowing.appendChild(following);
  following.innerHTML = "Following";
  const numberFollowing = document.createElement("p");
  userPreviewFollowing.appendChild(numberFollowing);
  numberFollowing.innerHTML = data.following;

  const location = document.createElement("span");
  userPreviewSocial1.appendChild(location);
  location.innerHTML = "Location: "+ data.location;

  const email = document.createElement("span");
  userPreviewSocial2.appendChild(email);
  email.innerHTML = "Email: "+data.email;

  const twitter = document.createElement("span");
  userPreviewSocial3.appendChild(twitter);
  twitter.innerHTML = "Twitter: "+ data.twitter_username;

  const github = document.createElement("span");
  userPreviewSocial4.appendChild(github);
  github.innerHTML = "Github: "+ data.login;

}
