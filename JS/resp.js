import { getResp, saveProgress } from "./conexion.js";

const quiz = document.querySelector("#quiz-container");


quiz.addEventListener('submit', async (e) => {
    e.preventDefault();
    const resp1 = document.querySelector('#resp1').value;
    const resp2 = document.querySelector('#resp2').value;
    const resp3 = document.querySelector('#resp3').value;
    const resp4 = document.querySelector('#resp4').value;
    const resp5 = document.querySelector('#resp5').value;
    const doc = await getResp(e.target.dataset.id)
    let nota = 0

    if(doc.data().resp1 == resp1){
        nota ++
    }
    if(doc.data().resp2 == resp2){
        nota ++
    }
    if(doc.data().resp3 == resp3){
        nota ++
    }
    if(doc.data().resp4 == resp4){
        nota ++
    }
    if(doc.data().resp5 == resp5){
        nota ++
    }


    if(nota > 3){
        window.alert("Has superado el quiz con una nota de " + nota + "/5");
        saveProgress(e.target.dataset.id)
        location.replace('./listaTemas.html');
    }else{
        window.alert("Has reprobado la prueba con un reslutado de " + nota + "/5");
    }
})








