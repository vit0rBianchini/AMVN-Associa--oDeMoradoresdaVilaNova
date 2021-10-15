
const toggleHome = () =>{
    const home = document.getElementById("home")
    
    const body = document.getElementById("body")
    body.classList.toggle("body-ativo")
    
    home.classList.toggle("cabecalho_links-ativo")
}