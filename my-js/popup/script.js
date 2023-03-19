
    let btn = document.getElementById('btnPopup')
    let screen = document.getElementById('PopupScreen')

    btn.addEventListener('click', function(){
        screen.style.display = 'flex'
    })


function btnclose(){
    screen.style.display = 'none'
}
function openPopup(){
    screen.style.display = 'flex'
}