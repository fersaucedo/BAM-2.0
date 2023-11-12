const categorias = document.querySelector('#categorias');


categorias.addEventListener('change', (e)=> {


    let seleccion = categorias.value;
    
    switch (seleccion) {
        case "Todas las categorias":

           window.location.href = "../pages/todas.html";   

            break;
        case "Thriller":
            window.location.href ="../pages/thriller.html"

            break;
        case "Fantasia":
            window.location.href ="../pages/fantasia.html"

            break;

        case "Romance":
            window.location.href ="../pages/romance.html"

            break;
        case "Novela":
            window.location.href ="../pages/novela.html"

            break;

        default:
            window.location.href = "index.html";
            break;
    }
})
