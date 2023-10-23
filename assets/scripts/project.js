function show_project() {
    const heading = document.createElement('h2')
    heading.textContent = project.name
    const ss_section = document.createElement('div')
    ss_section.className = 'screenshots-container'

    const left_btn = document.createElement('span')    
    left_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>'
    left_btn.className = 'prev'
    left_btn.addEventListener('click', ()=>{
        change_slides(-1)
    })
    ss_section.appendChild(left_btn)    
    
    for (let i=1;i<7;i++){
        const screenshot = document.createElement('img')
        screenshot.src = `${project.screenshots}/${i}.png`
        screenshot.className = `screenshot ${i}`
        ss_section.appendChild(screenshot)
    }

    const right_btn  = document.createElement('span')
    right_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>'
    right_btn.className = 'next'
    right_btn.addEventListener('click', ()=> {
        change_slides(1)
    })
    ss_section.appendChild(right_btn)

    const desc_section = document.createElement('div') 
    const desc = document.createElement('p')
    desc.textContent = project.description
    desc_section.appendChild(desc)

    project_section.append(heading, ss_section, desc_section)
}

function show_slide(n){
    const slides = document.getElementsByClassName("screenshot")
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
let projectIndex = localStorage.getItem('index')

const title = document.querySelector('title')
title.textContent = `Works | ${project.name}`

const project_section = document.querySelector('#project')

show_project()
show_slide(1)
