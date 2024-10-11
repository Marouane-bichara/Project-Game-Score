let Team1Value = document.getElementById('NumberT1');
let Team2Value = document.getElementById('numberT2');
let ButtonTeam1 = document.getElementById('team1');
let ButtonTeam2 = document.getElementById('team2');
let Deletescore1 = document.getElementById('Deletescore1');
let Resetscore1 = document.getElementById('Resetscore1');
let Resetscore2 = document.getElementById('Resetscore2');


let value1 = 0;
let value2 = 0;

ButtonTeam1.addEventListener("click" , ()=>
    {
        value1++;
        Team1Value.innerHTML  = value1;
    }
);
ButtonTeam2.addEventListener("click" , ()=>
    {
        value2++;
        Team2Value.innerHTML  = value2;
    }
);


Deletescore1.addEventListener("click" , ()=>
    {
        value1--;
        Team1Value.innerHTML  = value1;
    }
)
Deletescore2.addEventListener("click" , ()=>
    {
        value2--;
        Team2Value.innerHTML  = value2;
    }
)

Resetscore1.addEventListener("click" , ()=>
    {
        value1 = 0;
        Team1Value.innerHTML  = value1;
    }
);
Resetscore2.addEventListener("click" , ()=>
    {
        value2 = 0;
        Team2Value.innerHTML  = value2;
    }
);