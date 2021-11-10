
const linksSocialMedias = {
    linkedin: "/in/tiago-ferreira-dev-web",
    github: "T-pl",
    youtube: "tiago4849",
    facebook: "tiago.fqu",
    instagram: "camus_rebelde"
}

function changeLinksSocialMedias() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`

    }

}

changeLinksSocialMedias()

function getInfosOfProfile() {
    const url = `https://api.github.com/users/${linksSocialMedias.github}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            // bioDescrition.textContent = data.bio
    })
}

getInfosOfProfile()