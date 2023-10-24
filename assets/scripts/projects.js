async function get_data() {
    return await fetch('assets/projects.json')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

async function show_project_cards() {
    const projects = await get_data()
    console.log(projects)

    projects.forEach((project, i) => {
        console.log(project.name, i)
        const card = document.createElement('div')
        card.className = 'card'
        const card_cover = document.createElement('img')
        console.log(project.icon)
        card_cover.src = project.icon
        console.log(card_cover)

        card_title = document.createElement('span')
        card_title.textContent = project.name
        card_title.className = 'hidden'

        card_cover.addEventListener('click',() => {
            open_project(project, i)
        })
        card_title.addEventListener('click',() => {
            open_project(project, i)
        })

        card_cover.addEventListener('mouseover', () => {
            const title = card_cover.parentNode.childNodes[1]
            title.classList.remove('hidden')
            card_cover.style.opacity = 0.5
            card_cover.style.cursor = 'pointer'
        })
        card_title.addEventListener('mouseover', () => {
            const title = card_cover.parentNode.childNodes[1]
            title.classList.remove('hidden')
            card_cover.style.opacity = 0.5
            card_title.style.cursor = 'pointer'
        })

        card_cover.addEventListener('mouseleave', () => {
            const title = card_cover.parentNode.childNodes[1]
            title.classList.add('hidden')
            card_cover.style.opacity = 1
        })
        card_title.addEventListener('mouseleave', () => {
            const title = card_cover.parentNode.childNodes[1]
            title.classList.remove('hidden')
            card_cover.style.opacity = 0.5
        })
     
        card.append(card_cover, card_title)
        projects_section.appendChild(card)
    })
}


function open_project(project, i) {
    localStorage.setItem("project", JSON.stringify(project))
    localStorage.setItem("index", i)
    window.open('project.html', "_self")
}

const projects_section = document.querySelector('#projects')

show_project_cards()
