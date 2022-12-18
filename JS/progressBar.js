import { getProgress } from "./conexion.js";

const progressContainer = document.querySelector('#barra-progreso');

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getProgress()
    let html = ''

    querySnapshot.forEach(doc => {
        html += `
        <div></div>
        `
    });
    progressContainer.innerHTML = html
})