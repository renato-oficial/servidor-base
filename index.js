const express = require('express')
const app = express()

app.get("/", (req, res) => res.status(200).json({ message: 'API is alive ;)'}))



const listener = app.listen( process.env.PORT || 3000, () => {
	console.log(`Server is running on port: ${JSON.stringify(listener.address()["port"])}`)
})