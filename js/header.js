/*******************************
*     hamburger menu part
*******************************/
function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}