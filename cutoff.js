var maths_mark=document.getElementById("maths")
var physics_mark=document.getElementById("physics")
var chemistry_mark=document.getElementById("chemistry")
var cutoff=document.getElementById("cutoff")

function calculate()
{
   var Maths = maths_mark.value
   var Physics = physics_mark.value
   var Chemistry = chemistry_mark.value
   var Cutoff=Number(Maths)+(Number(Physics)+Number(Chemistry))/2
   cutoff.textContent=" YOUR CUT OFF : "+Cutoff+"/200"
}