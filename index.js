var Leonardo = window.document.getElementById('Leonardo')
var Samantha = window.document.getElementById('Samantha')
var Bruna = window.document.getElementById('Bruna')
var setaesquerda = window.document.getElementById('seta-esquerda')
var setadireita = window.document.getElementById('seta-direita')
function rolarparadireita(){
    Leonardo.style = 'display:none'
    Bruna.style ='display:flex'
    setaesquerda.style = 'display:flex;margin-top:90px'
    setadireita.style = 'display:none'

}
function rolarparaesquerda(){
    Leonardo.style = 'display:flex'
    Bruna.style ='display:none'
    setaesquerda.style = 'display:none'
    setadireita.style = 'display:flex'
}
