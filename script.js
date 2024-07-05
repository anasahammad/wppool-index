const menuButton = document.getElementById('menuButton');
        const menuIcon = document.getElementById('menuIcon');
        const menu = document.getElementById('menu');

        menuButton.addEventListener('click', () => {
            // Toggle the menu visibility
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menuIcon.src = './images/bg-vector.png';
            } else {
                menu.classList.add('hidden');
                menuIcon.src = 'path_to_your_menu_icon.png';
            }
        });

       