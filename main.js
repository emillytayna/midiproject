function tocaSomPom(){
    //document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick=tocaSomPom;

function tocaSomClap(){
    //document.querySelector('.tecla_clap');
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick=tocaSomClap;

function tocaSomTim(){
    //document.querySelector('.tecla_tim');
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick=tocaSomTim;

function tocaSomPuff(){
    //document.querySelector('.tecla_puff);
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick=tocaSomPuff;

function tocaSomSplash(){
    //document.querySelector('.tecla_splash');
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick=tocaSomSplash;

function tocaSomToim(){
    //document.querySelector('.tecla_toim');
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick=tocaSomToim;

function tocaSomPsh(){
    //document.querySelector('.tecla_psh');
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick=tocaSomPsh;

function tocaSomTic(){
    //document.querySelector('.tecla_tic');
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick=tocaSomTic;

function tocaSomTom(){
    //document.querySelector('.tecla_tom');
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick=tocaSomTom;

//Adicionar o evento de tecla
document.addEventListener("keydown",function(event){
    //mostra qual tecla foi adicionada no evento
    console.log(event.key)

    //verificando botao especifico
    if(event.key==="q" || event.key==="Q"){
        tocaSomPom();
    }

    if(event.key==="w" || event.key==="W"){
        tocaSomClap();
    }

    if(event.key==="e" || event.key==="E"){
        tocaSomTim();
    }

    if(event.key==="a" || event.key==="A"){
        tocaSomPuff();
    }

    if(event.key==="s"  || event.key==="S"){
        tocaSomSplash();
    }

    if(event.key==="d" || event.key==="D"){
        tocaSomToim();
    }

    if(event.key==="z" || event.key==="Z"){
        tocaSomPsh();
    }

    if(event.key==="x" || event.key==="X"){
        tocaSomTic();
    }

    if(event.key==="z" || event.key==="Z"){
        tocaSomToim();
    }

})