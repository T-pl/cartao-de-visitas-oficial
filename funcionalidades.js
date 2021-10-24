
const linksSocialMedias = {
    github: "T-pl",
    youtube: "tiago4849",
    facebook: "tiago.fqu",
    instagram: "camus_rebelde",
    linkedin: "tiagofqu"
}

function changeLinksSocialMedias() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`

    }

}

changeLinksSocialMedias()