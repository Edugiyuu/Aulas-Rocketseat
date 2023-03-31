const questions = [
    "O que aprendi hoje?",
    "O que me deixou feliz hoje?"
]
const ask = (index = 0) => {
    process.stdout.write(questions[index]+ '\n\n')
}

ask()