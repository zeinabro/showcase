async function get_data() {
    return await fetch('assets/projects.json')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

async function show_project() {
    const projects = await get_data()
    console.log(projects)
    console.log(project)

    const title_container = document.createElement('p')
    title_container.className = 'project-title'
    const title = document.createElement('a')
    title.className = 'project-title'
    if (project.link) {title.href = project.link}
    title.target = "_blank"
    title.textContent = (project.name).toUpperCase()
    title_container.appendChild(title)

    const project_role = document.createElement('p')
    project_role.className = 'role'
    project_role.innerHTML = `${project.role} ${project.group == 'y' ? '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>'}`

    const ss_section = document.createElement('div')
    ss_section.className = 'screenshots-container'

    const left_image_btn = document.createElement('span')    
    left_image_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>'
    left_image_btn.className = 'prev-image'
    left_image_btn.addEventListener('click', ()=>{
        change_slides(-1)
    })
    ss_section.appendChild(left_image_btn)    

    console.log(project.screenshots)
    
    for (let i=1;i<7;i++){
        const screenshot = document.createElement('img')
        screenshot.src = `${project.screenshots}/${i}.png`
        screenshot.className = `screenshot ss-${i}`
        ss_section.appendChild(screenshot)
    }

    const right_image_btn  = document.createElement('span')
    right_image_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>'
    right_image_btn.className = 'next-image'
    right_image_btn.addEventListener('click', ()=> {
        change_slides(1)
    })
    ss_section.appendChild(right_image_btn)

    const desc_section = document.createElement('div') 
    desc_section.className = 'description-container'
    const desc = document.createElement('p')
    desc.className = 'description'
    desc.textContent = project.description
    desc_section.appendChild(desc)

    const links_section = document.createElement('div')
    links_section.className = 'links'

    const github_link = document.createElement('a')
    github_link.title = 'Repo'
    github_link.target = "_blank"
    github_link.href = project.repo 
    const github_link_icon = document.createElement('span')
    github_link_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>'
    github_link.className = 'link-icon'
    github_link_icon.className = 'link-icon'
    github_link.appendChild(github_link_icon)

    const app_link = document.createElement('a')
    app_link.title='App'
    app_link.target = "_blank"
    app_link.href = project.link
    const app_link_icon = document.createElement('span')
    app_link_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>`
    app_link.className = 'link-icon'
    app_link.appendChild(app_link_icon)

    const server_link = document.createElement('a')
    server_link.href = project.api 
    server_link.target = "_blank"
    const server_link_icon = document.createElement('span')
    server_link_icon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>'
    server_link.className = 'link-icon'
    server_link.appendChild(server_link_icon)
    server_link.title = 'API'

    if (project.repo){
        links_section.append(github_link)
    }
    if (project.link){
        links_section.append(app_link)
    }
    if (project.api){
        links_section.append(server_link)
    }

    project_section.append(title_container, project_role, ss_section, desc_section, links_section)

    const left_project_btn = document.createElement('span')    
    left_project_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>'
    left_project_btn.className = 'prev-project'
    left_project_btn.addEventListener('click', ()=>{
        change_project(projects,-1)
    })

    const right_project_btn  = document.createElement('span')
    right_project_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>'
    right_project_btn.className = 'next-project'
    right_project_btn.addEventListener('click', ()=> {
        change_project(projects,1)
    })

    container.append(left_project_btn, project_section, right_project_btn)

    show_slide(1)
}

function change_project(projects,n){
    let x = projectIndex += n

    if (x > projects.length-1) {
        x = 0
        localStorage.setItem("project", JSON.stringify(projects[x]))
        localStorage.setItem("index", x)
    } else if (x < 0) {
        x = projects.length-1
        localStorage.setItem('project', JSON.stringify(projects[x]))
        localStorage.setItem('index', x)
    } else {
        localStorage.setItem('project', JSON.stringify(projects[x]))
        localStorage.setItem('index', x)
    }
    console.log(localStorage)
    window.open('project.html', "_self")

}

function show_slide(n){
    const slides = document.getElementsByClassName("screenshot")
    console.log(slides.length)
    if (n > slides.length) {imageIndex = 1}
    if (n < 1) {imageIndex = slides.length} 
    for (let i=0;i<slides.length;i++) {
        slides[i].style.display = "none"
    }
    slides.item(imageIndex-1).style.display = 'block'
    slides[imageIndex-1].style.display = 'block'
}

function change_slides(n) {
    show_slide(imageIndex += n)
}

let imageIndex = 1

const project = JSON.parse(localStorage.getItem('project'))
let projectIndex = parseInt(localStorage.getItem('index'))

const title = document.querySelector('title')
title.textContent = `Works | ${project.name}`

const container = document.querySelector('#project-container')
const project_section = document.createElement('div')
project_section.id = 'project'

show_project()
