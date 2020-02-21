const generateLocationMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateLocationMessage
}