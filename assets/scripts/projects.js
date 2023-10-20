async function get_data() {
    return await fetch('../assets/projects.json')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

async function show_project_cards() {
    const projects = await get_data()
    console.log(projects)

    projects.forEach((project) => {
        const card = document.createElement('div')
        card.className = 'card'
        const card_cover = document.createElement('img')
        card_cover.src = project.card
        card.appendChild(card_cover)
        projects_section.appendChild(card)
    })
}

const projects_section = document.querySelector('#projects')

show_project_cards()
