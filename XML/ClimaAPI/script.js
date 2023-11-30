var cidade = document.querySelector("#cidade");
var btn = document.querySelector("#btn");
var resp = document.querySelector("#resp");
var temperatura = document.querySelector("#temperatura");
var temepraturaMax = document.querySelector("#temperaturaMax");
var temepraturaMin = document.querySelector("#temperaturaMin");
var img = document.querySelector("#img");
var nascimentoSol = document.querySelector("#nascimentoSol");
var porSol = document.querySelector("#porSol");
var descricao = document.querySelector("#descricao");
var velocidade = document.querySelector("#velocidade");
var escalaTemperatura = document.querySelector('#escalaTemperatura');
var req = new XMLHttpRequest();

cidade.addEventListener("keypress", function(event) {
    
    if (event.keyCode === 13) {
        event.preventDefault();
        consulta();
    }
});

function consulta(){
    var URL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cidade.value + '&appid=3d153a186c6d625fc17f1c820c1248f2&lang=pt_br&units=' + escalaTemperatura.value + '&mode=xml';
    console.log(escalaTemperatura.value);
    
    req.onloadend = function(){
        resp = req.responseText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(resp, "text/xml");
        const textoErro = document.getElementById("textoErro")
        
        const cod = xmlDoc.querySelector('cod')

        if( cod == null){
            document.getElementById('widget').style.display = 'block';
            temperatura.innerHTML =  xmlDoc.querySelector('temperature').getAttribute('value');
            temepraturaMax.innerHTML = xmlDoc.querySelector('temperature').getAttribute('max');
            temepraturaMin.innerHTML = xmlDoc.querySelector('temperature').getAttribute('min');
            
            const temp = Math.trunc(xmlDoc.querySelector('temperature').getAttribute('value'));
            console.log(temp)

            tempConvert(temp,escalaTemperatura.value);


            var icon = xmlDoc.querySelector('weather').getAttribute('icon');
            var URL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            img.src = URL;

            nascimentoSol.innerHTML = formatTimeString(xmlDoc.querySelector('sun').getAttribute('rise'));
            porSol.innerHTML = formatTimeString(xmlDoc.querySelector('sun').getAttribute('set'));

            descricao.innerHTML= xmlDoc.querySelector('weather').getAttribute('value');
            
            velocidade.innerHTML = xmlDoc.querySelector('wind').querySelector('speed').getAttribute('value');
        } else {
            alert("O nome fornecido não corresponde a nenhuma cidade!");
        }
    }

    req.open('GET', URL);
    req.send(null);
}

function dateFormat(hora){
    var date = new Date(hora * 1000);
    var hora = date.getHours();
    var minutos = date.getMinutes();
    var tempoFormatado = hora.toString().padStart(2,'0') + ":" + minutos.toString().padStart(2,'0');
    return tempoFormatado;
}

function tempConvert(temp, escala){
    if(escala === "metric"){
        if(Math.trunc(temp) > 20){
            document.getElementById('widget').className = 'hotwidget';
            document.getElementById('body').className = 'hotbody';
        }else if(Math.trunc(temp) <= 20){
            document.getElementById('widget').className = 'widget';
            document.getElementById('body').className = 'body';
        }
    } else if(escala === "imperial"){
        if(Math.trunc(temp) > 68){
            document.getElementById('widget').className = 'hotwidget';
            document.getElementById('body').className = 'hotbody';
        }else if(Math.trunc(temp) <= 68){
            document.getElementById('widget').className = 'widget';
            document.getElementById('body').className = 'body';
        }
    }else if(escala === "standard"){
        if(Math.trunc(temp) > 293){
            document.getElementById('widget').className = 'hotwidget';
            document.getElementById('body').className = 'hotbody';
        }else if(Math.trunc(temp) <= 293){
            document.getElementById('widget').className = 'widget';
            document.getElementById('body').className = 'body';
        }
    }
    
}

function formatTimeString(hora) {
    const date = new Date(hora);
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const horaFormatada = `${hours}:${String(minutes).padStart(2, '0')}`;
  
    return horaFormatada;
  }