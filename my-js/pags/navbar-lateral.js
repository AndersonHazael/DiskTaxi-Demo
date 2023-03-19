function openMenu(){

    btnOpen.style.display = 'none';
    btnClose.style.display = 'flex';
    menuLateral.style.transform = 'translateX(0)'; 
    menuLateral.style.transition = '0.5s';
    
}

function exitMenu(){

    btnClose.style.display = 'none';
    btnOpen.style.display ='flex';
    menuLateral.style.transform = 'translateX(100%)';
    menuLateral.style.transition = '0.5s';

}