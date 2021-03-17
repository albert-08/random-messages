const messages = [
    "Frida",
    "Daniela",
    "Mariza",
    "Lorena",
    "Andrea",
    "Alejandra"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}