async function get_data() {
    return await fetch('../assets/projects.json')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

async function show_project() {
    const projects = await get_data()
    console.log(projects.length-1)
    console.log(projects[projects.length-1])

    const title = document.createElement('p')
    title.className = 'project-title'
    title.textContent = (project.name).toUpperCase()
    const ss_section = document.createElement('div')
    ss_section.className = 'screenshots-container'

    const left_image_btn = document.createElement('span')    
    left_image_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>'
    left_image_btn.className = 'prev-image'
    left_image_btn.addEventListener('click', ()=>{
        change_slides(-1)
    })
    ss_section.appendChild(left_image_btn)    
    
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

    project_section.append(title, ss_section, desc_section)

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
