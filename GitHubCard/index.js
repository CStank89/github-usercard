import axios from 'axios'

// const dummyData = {
//   "login": "CStank89",
//   "id": 67664834,
//   "node_id": "MDQ6VXNlcjY3NjY0ODM0",
//   "avatar_url": "https://avatars1.githubusercontent.com/u/67664834?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/CStank89",
//   "html_url": "https://github.com/CStank89",
//   "followers_url": "https://api.github.com/users/CStank89/followers",
//   "following_url": "https://api.github.com/users/CStank89/following{/other_user}",
//   "gists_url": "https://api.github.com/users/CStank89/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/CStank89/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/CStank89/subscriptions",
//   "organizations_url": "https://api.github.com/users/CStank89/orgs",
//   "repos_url": "https://api.github.com/users/CStank89/repos",
//   "events_url": "https://api.github.com/users/CStank89/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/CStank89/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Christopher Stankiewicz",
//   "company": null,
//   "blog": "",
//   "location": "Eastern Pennsylvania ",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 22,
//   "public_gists": 0,
//   "followers": 1,
//   "following": 3,
//   "created_at": "2020-06-30T23:24:29Z",
//   "updated_at": "2020-09-03T18:01:57Z"
// }

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Cstank89')
  .then(stuff =>{
   
  })
  .catch(error =>{
    debugger
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


// 4
cardMaker('https://avatars1.githubusercontent.com/u/67664834?v=4','Christopher Stankiewicz', 'CStank89', 'Eastern Pennsylvania', 'https://api.github.com/users/CStank89', 'https://api.github.com/users/CStank89/followers', 'https://api.github.com/users/CStank89/following{/other_user}', null  )


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards /*

//
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ tetondan, dustinmyers, justsml, luishrd, bigknell];
 followersArray.forEach(otherUser =>{
   axios.get('https://api.github.com/users/${follwersArray[i]}')
   .then(response =>{
     console.log(response)
   })
 })



function cardMaker({ avatar_url, userName, theUserName, location, url, followers_url, following_url, bio}){
    const card= document.createElement('div')
    const img= document.createElement('img')
    const info = document.createElement('div')
    const h3 = document.createElement('h3')
    const usernamePTag = document.createElement('p')
    const personsLocation = document.createElement('p')
    const profile = document.createElement('p')
    const profileTag = document.createElement('p')
    const followers= document.createElement('p')
    const following= document.createElement('p')
    const bioTag = document.createElement('p')
    
    info.classList.add('card-info')
    h3.classList.add('name')
    usernamePTag.classList.add('username')
    

    img.textContent = avatar_url
    h3.textContent = userName
    usernamePTag.textContent = theUserName
    personsLocation.textContent = `${Location}`
    profile.textContent = `Profile: Address to users github page ${url}`
    profileTag.src = url 
    followers.textContent = followers_url
    following.textContent = following_url
    bioTag.textContent = bio




    // cards.appendChild(card)
    card.appendChild(img)
    card.appendChild(info)
    info.appendChild(h3)
    info.appendChild(usernamePTag)
    info.appendChild(location)
    info.appendChild(profile)
    profile.appendChild(profileTag)
    info.appendChild(bioTag)

    return card

}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
