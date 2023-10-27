document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const userInfo = document.getElementById('userInfo');

    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const url = `https://ecommerce-amenzon.onrender.com/users/clients/byEmail?email=${email}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Mostrar la información del usuario en el elemento "userInfo"
                    userInfo.innerHTML = `
                        <h3>Información del Usuario:</h3>
                        <p>Nombre: ${data.firstName} ${data.lastName}</p>
                        <p>Dirección: ${data.address}</p>
                        <p>Teléfono: ${data.phone}</p>
                        <p>Correo Electrónico: ${data.email}</p>
                    `;
                } else {
                    // Mostrar un mensaje de usuario no encontrado si no se encontró el usuario
                    userInfo.innerHTML = "Usuario no encontrado";
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
});
