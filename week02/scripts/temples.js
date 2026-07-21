// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript cargado correctamente');  // Verifica que se carga
    
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    console.log('Botón:', menuButton);  // Verifica que existe
    console.log('Navegación:', navigation);  // Verifica que existe

    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            console.log('Click en el menú');  // Verifica que el click funciona
            menuButton.classList.toggle('open');
            navigation.classList.toggle('open');
            console.log('Menú abierto:', navigation.classList.contains('open'));
        });
    }
});
