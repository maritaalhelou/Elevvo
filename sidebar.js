const setting_btn = document.getElementById('setting-btn')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

let menuOpen = false

function openMenu() {
    menuOpen = true
    overlay.style.display = 'block'
    sidebar.style.width = '250px'
}
function closeMenu() {
    menuOpen = false
    overlay.style.display = 'none'
    sidebar.style.width = '0px'
}


setting_btn.addEventListener('click',function(){
    if(!menuOpen){
        openMenu()
    }
})

overlay.addEventListener('click',function(){
    if(menuOpen){
        closeMenu()
    }
})

