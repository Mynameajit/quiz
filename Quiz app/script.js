  // ==========================> All qution and option <========================
  const allqution = [
    {
        'que': "Javascript is an _______ language?",
        'a': "objcet orient",
        'b': "objcet baced",
        'c': "procedular",
        'd': "none of the",
        'ans': "a"

    },
    {
        'que': "Which of the following keywords is used to define a variable in Javascript?",
        'a': "ver",
        'b': "let",
        'c': "a & b",
        'd': "none of the",
        'ans': "c"
    },
    {
        'que': "Which type of JavaScript language is ___",

        'a': "Object-Oriented",
        'b': "Object-Based",
        'c': "Assembly-language",
        'd': "High-level",
        'ans': "b"
    },
    {
        'que': "Which one of the following also known as Conditional Expression:",
        'a': "Alternative to if-else",
        'b': "Switch statement",
        'c': "If-then-else statemen",
        'd': "immediate i",
        'ans': "a"
    }
]

// =========================== button funcation ========================

const btn = document.querySelector("#btn")
btn.addEventListener(
    "click", function () {
        // newqution()
        chakedans()

    }
)

const qution = document.querySelector('#qution');
// ===================Target all option ==============
const alloption = document.querySelectorAll(".option")
// =========================== Change option And qution funcation ===============
let index = 0;
const newqution = () => {
    if(index===totoal){
        return endquiz()
}
         reset()
    const arr = allqution[index];
    qution.innerHTML = `${index + 1}) ${arr.que}`
    alloption[0].nextElementSibling.innerHTML = `${arr.a}`
    alloption[1].nextElementSibling.innerHTML = `${arr.b}`
    alloption[2].nextElementSibling.innerHTML = `${arr.c}`
    alloption[3].nextElementSibling.innerHTML = `${arr.d}`
    // index++
}
let totoal = allqution.length
let rong = 0, right = 0


function chakedans() {

    let anse = getans()
    let data = allqution[index];
    // console.log(data.ans);
    if (anse == data.ans) {
        right++
    }
    else {
        rong++
    }
    index++
    newqution()
    return;
}

const getans = () => {
    let answer;
    alloption.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value
                   console.log(answer);
            }

        }
    )
    return answer
}
function reset() {
    alloption.forEach(
        (input) => {
            input.checked = false
        }
    )
}

function endquiz(){
    let container=document.querySelector(".container")
    
    console.log(container);
    container.innerHTML=`
    <h1 class="quizover"> Be chutiya tu fail ho gya he<h1/>
        <h2 class="lestres">${right}/${totoal} are correct </h2>
    `
}

newqution()
