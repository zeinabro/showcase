function show_project() {
    const heading = document.createElement('h1')
    heading.textContent = project.name

    const ss_section = document.createElement('div')
    ss_section.className = 'screenshots'
    const screenshot = document.createElement('img')
    screenshot.src = `${project.screenshots}/1.png`
    screenshot.className = 'screenshot 1'
    ss_section.appendChild(screenshot)
    project_section.append(heading, screenshot)
}

const project = JSON.parse(localStorage.getItem('project'))
console.log(project)

const title = document.querySelector('title')
title.textContent = `Works | ${project.name}`

const project_section = document.querySelector('#project')

show_project()
