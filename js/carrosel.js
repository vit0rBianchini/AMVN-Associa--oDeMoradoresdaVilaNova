var imgs = []
$(document).ready(function () {
    var imagens = $(".carrosel_img")
    $.map(imagens, function (img) {
        imgs.push(img)
    });
    
    setInterval(trocaImagem, 5000);
    
});

function trocaImagem(){
    $(".carrosel_img").remove();
    imgs.push(imgs.splice(0,1)[0]);
    imgs.forEach(img => {
        $(".carrosel_imgs").append(img);
    })

}
