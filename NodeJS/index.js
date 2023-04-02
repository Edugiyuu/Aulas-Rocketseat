const questions = [
    "O que aprendi hoje?",
    "O que me deixou feliz hoje?"
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

process.on('exit',() =>{
    console.log(`
    O que aprendi hoje?
    ${answers[0]}

    "O que me deixou feliz hoje?"
    ${answers[1]}
    `);
})