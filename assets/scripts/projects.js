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
        
    })
}

const projects_section = document.querySelector('#projects')

show_project_cards()
