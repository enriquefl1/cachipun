// JUEGO DE CACHIPUN

// INICIO
// Debe recibir la cantidad de juegos que quiere el usuario
let CantidadJuegos = prompt("Cuantos juegos desea");
CantidadJuegos = parseInt(CantidadJuegos);

if ( CantidadJuegos >= 0 ) {
    for ( let i = 1; i <= CantidadJuegos; i++) { 
        alert ( "Se inicia juego n°:" + i)

        // Debe recibir la opcion del juego 0:Piedra 1:Papel 2:Tijera
        opcionUsuario = prompt("Ingrese opción: 0=Piedra 1=Papel 2=Tijera");
        opcionUsuario = parseInt(opcionUsuario);

        if(opcionUsuario>=0 && opcionUsuario <=2 ) {

            // Debo seleccionar la opción de la maquina
            opcionMaquina = Math.floor(Math.random() * 3)

            switch (opcionMaquina) {
                case 0:
                    alert("Maquina eligio 0=Piedra")
                    break;
                case 1:
                    alert("Maquina eligio 1=Papel")
                    break;
                case 2:
                    alert("Maquina eligio 2=Tijera")
                    break;
                default:
                    break;
            }

            // Debo entregar el resultado
            if (opcionUsuario == 0) { // Si usuario eligio PIEDRA=0
                switch (opcionMaquina) {
                    case 0: // Maquina eligio PIEDRA
                        alert("EMPATE !!! > porque: PIEDRA del Usuario es igual PIEDRA de la Maquina")
                        break;
                    case 1: // Maquina eligio PAPEL
                        alert("GANA Maquina !!! > porque : PAPEL de la maquina envuelve PIEDRA del Usuario  ")
                        break;
                    case 2:// Maquina eligio TIJERA
                        alert("Felicitaciones GANA Usuario !!! > porque : PIEDRA del Usuario rompe la TIJERA de la maquina")
                        break;
                    default:
                        break;
                }

                
            }

            if (opcionUsuario == 1) { // Si usuario eligio PAPEL=1
                switch (opcionMaquina) {
                    case 0: // Maquina eligio PIEDRA
                        alert("Felicitaciones GANA Usuario !!! porque : PAPEL del Usuario envuelve PIEDRA de la Maquina")
                        break;
                    case 1: // Maquina eligio PAPEL
                        alert("EMPATE !!! porque: PAPEL del Usuario = PAPEL de la Maquina")
                        break;
                    case 2:// Maquina eligio TIJERA
                        alert("GANA Maquina !!! porque :  TIJERA de la maquina corta el Papel del Usuario")
                        break;
                    default:
                        break;
                }
                
            }

            if (opcionUsuario == 2) { // Si usuario eligio TIJERA=2
                switch (opcionMaquina) {
                    case 0: // Maquina eligio PIEDRA
                        alert("GANA Maquina !!! porque : PIEDRA de la Maquina rompe la TIJERA del usuario")
                        break;
                    case 1: // Maquina eligio PAPEL
                        alert("Felicitaciones GANA Usuario !!! porque : TIJERA del Usuario corta el PAPEL de la maquina")
                        break;
                    case 2:// Maquina eligio TIJERA
                        alert("Juego Empatado porque: TIJERA del Usuario = TIJERA de la Maquina")
                        break;
                    default:
                        break;
                }
            }
        } // IF
        else {
            alert("La opcion del usuario debe ser 0, 1, 2. se sale del juego")
        }
    } // FOR 
}
else {
    alert("Opcion menor a Cero, salgo del juego");
}
alert("fin del juego");