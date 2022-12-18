const lista = document.getElementById("listaEjerc");

Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",
    dragClass: "drag"
});