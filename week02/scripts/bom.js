// Obtener referencias a los elementos del DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Agregar el evento al botón
button.addEventListener('click', function () {
  // Verifico que el campo no ande vacío
  if (input.value.trim() !== '') {
    // Creo elementos
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Configuro el contenido
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', 'Delete chapter');

    // Inserto el botón dentro del li y luego agregarlo a la lista
    li.appendChild(deleteButton);
    list.appendChild(li);

    // Agrego evento al botón de eliminar
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Limpio el campo de entrada
    input.value = '';
  }

  // Devuelvo el foco al campo de entrada 
  input.focus();
});

