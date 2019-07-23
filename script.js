    let biblioteca=["joaopaulo" , "ananda" , "drake" , "Jerffesson" , "anamorita" , "pedrodrake" , "jessica" , "sasuke" 
    , "carolpandolfe" , "hashirama" , "shisui" , "momoshiki" , "metallee"];
    let qtde=biblioteca.length-1;
    let pos=Math.round(Math.random()*qtde);
    let palavra=biblioteca[pos];
    let tam=palavra.length;
    let cxletras=[];
    let acertos;
    let errosmax=7;
    let erros=0;
    let desenhos=[];
    let acertou=false;
    let jogando=false;
    let jog;

            function defineLetras(l){
                let objeto;
                for (let i = 0; i<20; i++) {
                    objeto=document.getElementById("letra"+i).value="";
                    objeto=document.getElementById("letra"+i).style.display="none";
                }
                for     (let i = 0; i< l; i++) {
                objeto=document.getElementById("letra"+i).style.display="inline-block";
                
                }
            }

            function inicia(){
                jogando=true;
                jog=document.getElementById("letraJ");
                    jog.value="";
                    jog.focus();
                    acertos=0;
                    erros=0;
                    acertou=false;
                    document.getElementById("dvletrasdigitadas").innerHTML = "letras Digitadas : ";
                    pos=Math.round(Math.random()*qtde);
                    palavra=biblioteca[pos];
                    tam=palavra.length;
                    defineLetras(tam);
                    document.getElementById("dvmsg").innerHTML = "";


            }



            function dica (){
                alert("Ninjas");
                jog.focus();


            }

            window.addEventListener("load" , inicia);


            function jogar() {
                //jog= document.getElementById("letraJ");
                jog.focus();
                if(jog.value==""){
                    alert("digite uma letra");

                }
                else{
                    if(jogando){
                    
                        let objetus ;
                        let letratmp
                        let letra;
                        let pesq;
                        letra=jog.value;
                        jog.value="";
                        acertou=false;
                        pesq= palavra.match(letra);
                        
                        while(pesq!=null){


                            letratmp=palavra.search(letra);
                            objetus=document.getElementById("letra"+ letratmp).value=letra;
                            palavra=palavra.replace(letra , '0');
                            acertos++;
                            pesq=palavra.match(letra);
                            acertou= true;

                        }
                        if(!acertou){
                            document.getElementById("dvletrasdigitadas").innerHTML +=letra.toUpperCase()
                            erros++;
                            if (erros<7) {
                                alert("vc errou");
                                
                            }
                            else{

                                document.getElementById("dvmsg").innerHTML=" Voce perdeu!!!";
                                jogando= false;
                            }

                        }
                        
                            if (acertos==tam) {
                                //document.getElementById("dvmsg").innerHTML="";
                                document.getElementById("dvmsg").innerHTML="voce ganhou!!!";  
                              
                                
                                jogando= false;

                            }
                    }
                }           
        
    }


   
