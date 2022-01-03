function calc(){
    document.getElementById("entry").innerText = document.getElementById("entryPrice").value
    document.getElementById("takeProfit").innerText = (document.getElementById("entryPrice").value * (1+document.getElementById("takeProfitP").value / 100)).toFixed(3)
    document.getElementById("stopLoss").innerText = (document.getElementById("entryPrice").value * (1-document.getElementById("stopLossP").value / 100)).toFixed(3)
    document.getElementById("risk").innerText = document.getElementById("posSize").value * (1-document.getElementById("stopLossP").value / 100) - document.getElementById("posSize").value
    document.getElementById("reward").innerText = document.getElementById("posSize").value * (1+document.getElementById("takeProfitP").value / 100) - document.getElementById("posSize").value

}

function copyValue(id){
    navigator.clipboard.writeText(document.getElementById(id).innerText)
}
