const calcRendimento = (q1, q2, result) => {
    q1 = document.getElementById('q1').value;
    q2 = document.getElementById('q2').value;
    result = ((q1 / q2) - 1)
    
    document.getElementById('resultadoCalcRendimento').innerHTML = result
}

const calcTrab = (q, u, w) => {
    q = document.getElementById('q_trab').value;
    u = document.getElementById('u_trab').value;
    
    w = (q-u)
    document.getElementById('resultadoCalcTrab').innerHTML = w
}

const calcCalor = (w, u, q) => {
    w = document.getElementById('w_calor').value;
    u = document.getElementById('u_calor').value;    
    
    q = (w + u)
    document.getElementById('resultadoCalcCalor').innerHTML = q
}

const calcEnergiaInterna = (q, u, w) => {
    q = document.getElementById('q_energiaInterna').value;
    u = document.getElementById('u_energiaInterna').value;
    w = (q - u);

    document.getElementById('resultatoCalcEnergiaInterna').innerHTML = w;
}