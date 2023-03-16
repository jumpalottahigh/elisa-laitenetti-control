import bodyParser from 'body-parser'
import express from 'express'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Body, From } = req.body
    console.log(`Received SMS from ${From}: ${Body}`)
    // Process the incoming SMS message as needed
    res.status(200).end()
  } else {
    console.log('not a post request')
    res.status(201).end()
  }
}
