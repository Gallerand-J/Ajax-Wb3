$(document).ready(function(){
    $("form").submit(function(event){
        /*Si la longueur de la valeur du champ #prenom est 0 (c'est-à-dire si
        le champ n'a pas été rempli), on affiche un message et on empêche l'envoi*/
        if($("#firstname").val().length === 0){
            $("#firstname").after("<span class='alert'>Merci de remplir ce champ</span>");
            event.preventDefault();
            
        }else{
            //On effectue nos requêtes Ajax, sérialise, etc...
            let chaine = $("form").serialize();
        };

    });
});

$(document).ready(function(){
    $("form").submit(function(event){
        /*Si la longueur de la valeur du champ #prenom est 0 (c'est-à-dire si
        le champ n'a pas été rempli), on affiche un message et on empêche l'envoi*/
        if($("#name").val().length === 0){
            $("#name").after("<span class='alert'>Merci de remplir ce champ</span>");
            event.preventDefault();
            
        }else{
            //On effectue nos requêtes Ajax, sérialise, etc...
            let chaine = $("form").serialize();
        };

    });
});

$(document).ready(function(){
    $("form").submit(function(event){
        /*Si la longueur de la valeur du champ #prenom est 0 (c'est-à-dire si
        le champ n'a pas été rempli), on affiche un message et on empêche l'envoi*/
        if($("#message").val().length === 0){
            $("#message").after("<span class='alert'>Merci de remplir ce champ</span>");
            event.preventDefault();
            
        }else{
            //On effectue nos requêtes Ajax, sérialise, etc...
            let chaine = $("form").serialize();
        };

    });
});