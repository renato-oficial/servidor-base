const express = require('express')
const app = express()
const WAConnection = require('./WAConnection')

app.get("/", (req, res) => res.status(200).json({ message: 'API is alive ;)'}))
app.get("/new", (req, res) => {
	const waConnection = new WAConnection()
	waConnection.initialize({ client: { id: 'ec2e7583-9135-480c-97e1-4ff7bbd518e8' }})
	res.status(200).json({ message: 'Initialized!'})
})


const listener = app.listen( process.env.PORT || 3000, () => {
	console.log(`Server is running on port: ${JSON.stringify(listener.address()["port"])}`)
})