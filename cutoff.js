let maths_mark=document.getElementById("maths")
let physics_mark=document.getElementById("physics")
let chemistry_mark=document.getElementById("chemistry")
let cutoff=document.getElementById("cutoff")

function calculate()
{
   let Maths = maths_mark.value
   let Physics = physics_mark.value
   let Chemistry = chemistry_mark.value
   let Cutoff=Number(Maths)+(Number(Physics)+Number(Chemistry))/2
   cutoff.textContent=" YOUR CUT OFF : "+Cutoff+"/200"
}