import { NextApiRequest, NextApiResponse } from 'next'
import bodyParser from 'body-parser'

const app = require('express')()
app.use(bodyParser.urlencoded({ extended: false }))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { Body, From } = req.body
    console.log(`Received SMS from ${From}: ${Body}`)
    // Process the incoming SMS message as needed
    res.status(200).end()
  } else {
    console.log('not a post request')
  }
}
