const questions = [
    "O que aprendi hoje?",
    "O que me deixou feliz hoje?",
    "Teste"
]
const ask = (index = 0) => {
    process.stdout.write(questions[index]+ ' > ')
}

ask()

const answers = []
process.stdin.on("data",data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on('exit',mostrar)

function mostrar(){
    for (let i = 0; i < questions.length; i++) {
        console.log(`Pergunta:${questions[i]}\n Resposta:${answers[i]}`);
        
    }
}