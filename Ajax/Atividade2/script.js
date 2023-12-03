//2) Desenvolva uma página web responsiva (Web App) onde o usuário informa seu estado, 
//cidade e rua, e é informado o CEP e o Bairro de todos os registros retornados.
var btn = document.querySelector("#btn");

btn.onclick = function(){
    
    var estado = document.getElementById("estado")
    var cidade = document.getElementById("cidade")
    var rua = document.getElementById("rua")
    var tabela = document.getElementById("table")
    var req = new XMLHttpRequest();

    req.onloadend = function(){
        resp = req.responseText;
        console.log(resp)
        resp_obj = JSON.parse(resp);
        tableResult(resp_obj);
    }

    req.open('GET',`https://viacep.com.br/ws/${estado.value}/${cidade.value}/${rua.value}/json/`);
    req.send(null);
};

function tableResult(results) {
    var tableHtml = '<table border="1"><tr><th>CEP</th><th>Logradouro</th><th>Bairro</th><th>Cidade</th><th>Estado</th></tr>';

    results.forEach(function (result) {
        tableHtml += `<tr>
                        <td>${result.cep}</td>
                        <td>${result.logradouro}</td>
                        <td>${result.bairro}</td>
                        <td>${result.localidade}</td>
                        <td>${result.uf}</td>
                    </tr>`;
    });

    tableHtml += '</table>';
    document.getElementById("table").innerHTML = tableHtml;
}
