function goTo(location) {
    let link = "/"+location+".html";
    window.location.href= link;
}

function proveri() {
    event.preventDefault();
    let ime = $('#ime').val();
    let prezime = $('#prezime').val();
    let mail = $('#mail').val();
    let poruka = $('#poruka').val();

    let Err = [];
    $('.err').each(function() {
        Err.push($(this));
    });
    
    if (!ime||!prezime||!mail||!poruka) {
        if (!ime) {
            Err[0].css("display", "block");
        }else{
            Err[0].css("display", "none");
        }
        if (!prezime) {
            Err[1].css("display", "block");
        }else{
            Err[1].css("display", "none");
        }
        if (!mail) {
            Err[2].css("display", "block");
        }else{
            Err[2].css("display", "none");
        }
        if (!poruka) {
            Err[3].css("display", "block");
        }else{
            Err[3].css("display", "none");
        }
    }else{
        console.log("Ime: "+ime+", Prezime: "+prezime+", Mail: "+mail+", Poruka: "+poruka);
    }
}

