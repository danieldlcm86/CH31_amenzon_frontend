const registrar = document.getElementById("submit");

registrar.addEventListener("click", () => {
    const nombre = document.getElementById("firstName").value;
    const apellido = document.getElementById("lastName").value;
    const direccion = document.getElementById("address").value;
    const correo = document.getElementById("email").value;
    const telefono = document.getElementById("phone").value;

    //Necesito asignar estas constantes a un Object que se va a enviar a mi servidor y posteriormente, convertir este Object en un formato que mi servidor pueda leer (JSON)
    const cliente = {
        firstName: nombre,
        lastName: apellido,
        address: direccion,
        email: correo,
        phone: telefono
    };

    //fetch API(url, method, headers (json), body, then, catch)
    const url = `https://ecommerce-amenzon.onrender.com/users/clients`;

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("Todo fine", data);
            return data;
        })
        .catch(error => {
            console.log("Aquí hay un error", error);
        })
});