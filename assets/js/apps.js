let listaAmigos = [];
//let nro_amigo = 0;

function agregarAmigo() {
    let valor_amigo = document.getElementById("input-amigo").value;
    if( valor_amigo == "") {
        alert("Debes ingresar el nombre del amigo");
        return
    }
    //primero deberia verificar q el nombre ya no se haya agregado
    listaAmigos.push(valor_amigo)
    document.getElementById("input-amigo").value = "";
    nuevo_amigo_p = document.createElement('p');
    nuevo_amigo_p.textContent = valor_amigo;
    nuevo_amigo_p.id = valor_amigo;
    nuevo_amigo_p.classList.add('content__amigos-lista');
    document.getElementById("content__amigos").appendChild(nuevo_amigo_p);
}

function sortearAmigo() {
    const btn_sortear = document.getElementById("sortear");

    if (btn_sortear.textContent == "REINICIAR") {
        listaAmigos = [];
        document.getElementById("pf_titulo").textContent = "Agrega el nombre de tu amigo";
        btn_sortear.textContent = "SORTEAR AMIGO";
        document.getElementById("content__amigos").innerHTML = ""; // Elimina todos los elementos de la lista
        document.getElementById("agregar-nombre").style.display = '';
        return;
    }

    if (listaAmigos.length === 0) {
        alert("Debe haber al menos un amigo en la lista para poder sortear!");
        return;
    }

    // Definir una función recursiva para eliminar amigos con animación
    function eliminarAmigos() {
        if (listaAmigos.length <= 1) {
            // Mostrar el último amigo sorteado
            document.getElementById("pf_titulo").textContent = "Tu amigo sorteado fue:";
            btn_sortear.textContent = "REINICIAR";
            document.getElementById("agregar-nombre").style.display = 'none';
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const idAmigo = listaAmigos[indiceAleatorio];

        // Aplicar clase de animación
        document.getElementById(idAmigo).classList.add('fade-out');

        // Esperar la duración de la animación antes de eliminar el elemento del DOM
        setTimeout(() => {
            document.getElementById(idAmigo).remove();
            listaAmigos.splice(indiceAleatorio, 1); // Eliminar el amigo de la lista

            // Llamar recursivamente para continuar eliminando
            setTimeout(eliminarAmigos, 1000); // Tiempo de espera entre eliminaciones
        }, 500); // Tiempo de duración de la animación
    }

    eliminarAmigos(); // Inicia el proceso de eliminación recursiva
}
