var billetera = 100
var a_depositar = 0
var destinatario = ""
var a_transferir = 0
var monto_total = 0
var porcentaje = 0

const Depositar = () => {
    alert("Recuerda que puedes realizar hasta $500 por depósito");

    do {
        a_depositar = parseFloat(prompt("¿Qué monto deseas depositar?"));
    } while (a_depositar > 500 || isNaN(a_depositar));

    billetera += a_depositar;
}

const Transferir = () => {
    alert("Recuerda que el Banco te descontará un pequeño porcentaje por cada transferencia");
    destinatario = prompt("A quien le deseas transferir?");
    a_transferir = parseFloat(prompt("Perfecto, cuánto le transfieres a " + destinatario + "?"));

    while (a_transferir > billetera || isNaN(a_transferir)) {
        a_transferir = parseFloat(prompt("Monto no válido. No tienes esa cantidad en tu billetera. Por favor, digita el monto a transferir."));
    }

    porcentaje = (a_transferir * 1.5) / 100;
    billetera -= (a_transferir + porcentaje);

    alert(`¡Transacción exitosa!\nLe has transferido $${a_transferir.toFixed(2)} a ${destinatario}\nSaldo actual: $${billetera.toFixed(2)}`);
}

const dineroDisponible = () => {
    alert(`Tienes $${billetera} en tu billetera virtual.`)
}