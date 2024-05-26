import React from 'react';


 function Info(){
    return(
<div class = "info">
    <img src = "./pictures/logo.png" class = "logo" />
    <h1>Paris Saint-Germain F.C.</h1>
    <p>Paris Saint-Germain Football Club, commonly referred to as Paris Saint-Germain 
        or simply PSG, is a professional football club based in Paris, France. They 
        compete in Ligue 1, the top division of French football. As France's most successful
         club, they have won 50 official honours, including twelve league titles and one major 
         European trophy. Their home ground is the Parc des Princes, located in the 16th 
         arrondissement of Paris near the Boulogne-Billancourt commune.</p>
</div>
    );
}


 function Rewards(){
    return(
        <div class = "rewards">
<h2>Rewards</h2>
<p>Paris Saint-Germain holds many records, most notably being the most successful 
    French club in history in terms of official titles won, with 50.They are the 
    record holders of all national competitions, having clinched twelve Ligue 1 
    championships, fourteen Coupe de France, nine Coupe de la Ligue, and twelve 
    Trophée des Champions. Their trophy cabinet also includes one Ligue 2 title.
    In international football, PSG have claimed one UEFA Cup Winners' Cup and one UEFA Intertoto Cup.</p>
</div>
  );
}


function Players(){
    return(
        <div className = "players">
            <h2>Players</h2>
            <ol>
                <li className = "theme1">Keylor Navas</li>
                <li className = "theme2">Achraf Hakimi</li>
                <li className = "theme3">Presnel Kimpembe (3rd-captain)</li>
                <li className = "theme1">Manuel Ugarte</li>
                <li className = "theme2">Marquinhos (captain)</li>
                <li className = "theme3">Kylian Mbappé (4th-captain)</li>
                <li className = "theme2">Fabián Ruiz</li>
                <li className = "theme3">Gonçalo Ramos</li>
                <li className = "theme1">Ousmane Dembélé</li>
                <li className = "theme3">Sergio Rico</li>
                <li className = "theme2">Marco Asensio</li>
            </ol>
        </div>
    );
}

export function App2(){
    return(
        <div class = "App2">
    <Info></Info>
    <Rewards></Rewards>
    <Players></Players>
    </div>
)
}