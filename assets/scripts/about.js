function show_about() {
    const me_section = document.createElement('div')
    me_section.className = 'me-section'
    const me_para = document.createElement('p')
    me_para.className = 'me-para'
    me_para.textContent = 'Hi! I\'m Zeinab.'

    const career_section = document.createElement('div')
    career_section.className = 'career-section'
    const career_para = document.createElement('p')
    career_para.className = 'career-para'
    career_para.textContent = 'I found a passion for technology and coding during my high school Computer Science lessons.'

    career_section.appendChild(career_para)

    me_section.appendChild(me_para)
    about_container.append(me_section, career_section)
}

const about_container = document.querySelector('#about-container')

show_about()
