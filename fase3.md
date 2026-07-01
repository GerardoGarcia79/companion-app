Offline First
Lo que haría sería primero almacenar la sesión de forma local (localStorage) antes de intentar enviarla al servidor. Si la petición falla por falta de conexión, la sesión permanecería marcada como "pendiente de sincronización", evitando que el usuario pierda información.

Posteriormente escucharía el evento online del navegador para sincronizar automáticamente las sesiones pendientes cuando la conexión se restablezca. Una vez confirmada la respuesta del servidor, eliminaría el registro local. De esta manera la aplicación sigue funcionando incluso sin conexión y garantiza que los datos eventualmente llegarán al servidor.

Pseudocódigo:
Primero
async function finishSession(session) {

    savePendingSession(session);

    try {

        await api.finishSession(session.id);

        removePendingSession(session.id);

    } catch {

        console.log("Quedó pendiente");

    }

}

Después
window.addEventListener("online", async () => {

    const pending = getPendingSessions();

    for (const session of pending) {

        try {

            await api.finishSession(session.id);

            removePendingSession(session.id);

        } catch {}

    }

});