function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function clickMenu() {
    if (items.style.display == 'block') {
        items.style.display = 'none'
    } else {
        items.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >=992) {
        items.style.display = 'block'
    } else {
        items.style.display = 'none'
    }
}