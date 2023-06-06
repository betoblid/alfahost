function menubar() {
    let menu = document.getElementById("mobile");
    let foto = document.getElementById("foto");

    if(menu.classList.contains("on")){
        menu.classList.remove("on");
        menu.classList.add("off");
        foto.src = "assets/nav.png"
    }else{
        menu.classList.remove("off");
        menu.classList.add("on")
        foto.src = "assets/foto x.png"
        menu.innerHTML = `
        <a href="#informaçao">INFORMAÇÕES</a>
                    <a href="#plano">PLANOS</a>
                    <a href="preços.html">PREÇOS</a>
                    <a href="#contato">CONTATO</a>`

        
    }
}