
function calcularDose() {
    var concentracao = document.getElementById('concentracao').value;
    var peso = document.getElementById('peso').value;
    var taxaInfusao = document.getElementById('taxaInfusao').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso;
        document.getElementById('resultado').innerText = `Dose de Fentanil: ${dose.toFixed(2)} mcg/kg/h`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}

function calcularDoseNoradrenalina() {
    var concentracao = document.getElementById('concentracaoNoradrena').value;
    var peso = document.getElementById('pesoNoradrena').value;
    var taxaInfusao = document.getElementById('taxaInfusaoNoradrena').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso; // mcg/kg/h
        var dosePorMinuto = dose / 60; // Convertendo para mcg/kg/min
        document.getElementById('resultadoNoradrenalina').innerText = `Dose de Noradrenalina: ${dosePorMinuto.toFixed(2)} mcg/kg/min`;
    } else {
        document.getElementById('resultadoNoradrenalina').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}

function calcularDoseMidazolam() {
    var concentracao = document.getElementById('midazolamConcentracao').value;
    var peso = document.getElementById('midazolamPeso').value;
    var taxaInfusao = document.getElementById('midazolamTaxaInfusao').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso;
        document.getElementById('midazolamResultado').innerText = `Dose de Midazolam: ${dose.toFixed(2)} mg/kg/h`;
    } else {
        document.getElementById('midazolamResultado').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}

function calcularDoseNitroprussiato() {
    var concentracao = document.getElementById('concentracaoNitro').value;
    var peso = document.getElementById('pesoNitro').value;
    var taxaInfusao = document.getElementById('taxaInfusaoNitro').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso; // mcg/kg/h
        var dosePorMinuto = dose / 60; // Convertendo para mcg/kg/min
        document.getElementById('resultadoNitroprussiato').innerText = `Dose de Nitroprussiato: ${dosePorMinuto.toFixed(2)} mcg/kg/min`;
    } else {
        document.getElementById('resultadoNitroprussiato').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}

function calcularDoseDobutamina() {
    var concentracao = document.getElementById('concentracaoDobuta').value;
    var peso = document.getElementById('pesoDobuta').value;
    var taxaInfusao = document.getElementById('taxaInfusaoDobuta').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso; // mcg/kg/h
        var dosePorMinuto = dose / 60; // Convertendo para mcg/kg/min
        document.getElementById('resultadoDobutamina').innerText = `Dose de Dobutamina: ${dosePorMinuto.toFixed(2)} mcg/kg/min`;
    } else {
        document.getElementById('resultadoDobutamina').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}

function calcularDoseKetamina() {
    var concentracao = document.getElementById('concentracaoKeta').value;
    var peso = document.getElementById('pesoKeta').value;
    var taxaInfusao = document.getElementById('taxaInfusaoKeta').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso; // mg/kg/h
        document.getElementById('resultadoKetamina').innerText = `Dose de Ketamina: ${dose.toFixed(2)} mg/kg/h`;
    } else {
        document.getElementById('resultadoKetamina').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}

function calcularDoseDopamina() {
    var concentracao = document.getElementById('concentracaoDopa').value;
    var peso = document.getElementById('pesoDopa').value;
    var taxaInfusao = document.getElementById('taxaInfusaoDopa').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso; // mcg/kg/h
        var dosePorMinuto = dose / 60; // Convertendo para mcg/kg/min
        document.getElementById('resultadoDopamina').innerText = `Dose de Dopamina: ${dosePorMinuto.toFixed(2)} mcg/kg/min`;
    } else {
        document.getElementById('resultadoDopamina').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}

function calcularDoseAdrenalina() {
    var concentracao = document.getElementById('concentracaoAdrena').value;
    var peso = document.getElementById('pesoAdrena').value;
    var taxaInfusao = document.getElementById('taxaInfusaoAdrena').value;

    if (concentracao > 0 && peso > 0 && taxaInfusao > 0) {
        var dose = (concentracao * taxaInfusao) / peso; // mcg/kg/h
        var dosePorMinuto = dose / 60; // Convertendo para mcg/kg/min
        document.getElementById('resultadoAdrenalina').innerText = `Dose de Adrenalina: ${dosePorMinuto.toFixed(2)} mcg/kg/min`;
    } else {
        document.getElementById('resultadoAdrenalina').innerText = 'Por favor, insira valores válidos para todos os campos.';
    }
}
