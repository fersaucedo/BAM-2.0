const categorias = document.querySelector('#categorias');


categorias.addEventListener('change', (e)=> {


    let seleccion = categorias.value;
    switch (seleccion) {
        case "Todas las categorias":

           window.location.href = "index.html";   

            break;
        case "Thriller":
            window.location.href ="../pages/proximamente.html"

            break;
        case "Fantasia":
            window.location.href ="../pages/proximamente.html"

            break;

        case "Romance":
            window.location.href ="../pages/proximamente.html"

            break;
        case "Novela":
            window.location.href ="../pages/proximamente.html"

            break;

        default:
            window.location.href = "index.html";
            break;
    }
})
