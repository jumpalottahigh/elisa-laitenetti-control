import bodyParser from 'body-parser'
import express from 'express'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
// app.post(bodyParser.urlencoded({ extended: false }))

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Body, From } = req.body
    console.log(`Received SMS from ${From}: ${Body}`)
    // Process the incoming SMS message as needed

    const newMessage = {
      // user_id: user.id,
      message: Body,
      from: From,
    }

    const table = supabase.from('smses')

    const { data: newRecord, error } = await table.insert(newMessage)

    if (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error inserting data' })
    }

    return res.status(200).json({ message: 'Data inserted successfully' }).end()

    // res.status(200).end()
  } else {
    console.log('not a post request')
    res.status(201).end()
  }
}
