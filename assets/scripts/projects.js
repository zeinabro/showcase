async function get_data() {
    return await fetch('../assets/projects.json')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

async function show_projects() {
    const projects = await get_data()
    console.log(projects)
}

show_projects()
