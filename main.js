const linksSocialMedia = {
  github: 'malcofreitas',
  facebook: 'malco.freitas',
  instagram: 'malcofreitas',
  linkedin: 'malcofreitas'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function changeNamePage(newName) {
  userName.textContent = `${newName}`
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //alert(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGitHub.href = data.html_url
      userImage.src = data.avatar_url
      linkGitHubName.textContent = data.login
    })
  //.then(data => alert(data.bio))
  //.then(data => data.name())
  //userName.textContent = data.name
}
getGitHubProfileInfos()

// function functionName(arguments1, arguments2) {
//   //code
// }

// ;(arguments1, arguments2) => {
//   //code
// }
