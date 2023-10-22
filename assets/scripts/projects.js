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
        card_cover.src = project.icon

        card_title = document.createElement('span')
        card_title.textContent = project.name
        card_title.className = 'hidden'

        card_cover.addEventListener('click',() => {
            open_project(project)
        })
        card_cover.addEventListener('mouseover', () => {
            console.log(card_title)
        })
        // card_cover.addEventListener('mouseover',()=>{
        //     console.log(card_title)
        // })
        // card_cover.addEventListener('mouseout', () => {
        //     console.log(card_title)
        // })
     
        card.append(card_cover, card_title)
        projects_section.appendChild(card)
    })
}


function open_project(project) {
    console.log(project)
    // const screenshot = document.createElement('img')
    // screenshot.src = `${project.screenshots}/1.png`
}

const projects_section = document.querySelector('#projects')

show_project_cards()
