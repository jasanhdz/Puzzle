let botones = ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8']

function boton(val){
    for (i = 0; i < botones.length; i++) { 
            if(document.getElementById(botones[i]).firstChild.data == val){
                return(botones[i])
            }
        }
}

function encontrar(id, bosTasId){
    let seguro = []
    if([2,5,8].includes(parseInt(bosTasId[1]))){
        seguro = [+3,-3,-1]
    }else if([0,3,6].includes(parseInt(bosTasId[1]))){
        seguro = [+3,+1,-3]
    }else{
        seguro = [+3,+1,-3,-1]
    }
    for(i = 0; i < botones.length; i++){
        if(parseInt(bosTasId[1])+parseInt(seguro[i]) == parseInt(id[1])){
            return(true);
        }
    }
    return(false)
}


function empujar(id){
    var btn = document.getElementById(id);
    if (btn.firstChild.data!=" "){
        bosTasId = boton(" ") 
        if(encontrar(id, bosTasId) == false) return;
        document.getElementById(bosTasId).firstChild.data = btn.firstChild.data;
        btn.firstChild.data = " "
    }
}

function solucion(rndList){
    var count = 0;
    for(i=0;i<rndList.length-1;i++){
        if(rndList[i] == 0){
            continue;
        }
        for(j=i+1;j<rndList.length;j++){
            if(rndList[j] == 0){
                continue;
            }else if(rndList[i]>rndList[j]){
                count++;
            }
        }
        
    }
    
    if(count%2 == 0){
        return(true);
    }else{
        return(false);
    }
}

function desordenar(){
    var rndList = []
    while(true){
        rndList = []
        while(rndList.length < 9){
            var randomnumber = Math.ceil(Math.random()*9)-1
            if(rndList.indexOf(randomnumber) > -1) continue;
            rndList[rndList.length] = randomnumber;
        }
        if(solucion(rndList)){
            break;
        }
    }
    for (i = 0; i < botones.length; i++) {
        if(rndList[i] == 0){
            val = " "
        }else{
            val = rndList[i].toString()
        }
        document.getElementById(botones[i]).firstChild.data = val
    }
}

