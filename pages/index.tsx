import React from 'react'
import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import {
  useUser,
  useSession,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

import Footer from '../components/Footer'

const MASTER_PHONE_NUMBER = process.env.NEXT_PUBLIC_MASTER_PHONE_NUMBER
const DEVICE_PHONE_NUMBER = process.env.NEXT_PUBLIC_DEVICE_PHONE_NUMBER

const ACCOUNT_SID = process.env.NEXT_PUBLIC_ACCOUNT_SID
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN

export default function Home() {
  const user = useUser()
  const session = useSession()
  const supabase = useSupabaseClient()

  const handleDeviceTurnOn = async () => {
    try {
      const params = new URLSearchParams()
      params.append('Body', '#01#0')
      params.append('To', DEVICE_PHONE_NUMBER)
      params.append('From', MASTER_PHONE_NUMBER)

      const data = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${ACCOUNT_SID}/Messages.json`,
        params,
        {
          auth: {
            username: ACCOUNT_SID,
            password: AUTH_TOKEN,
          },
        }
      )

      console.log('data: ', data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeviceTurnOff = async () => {
    try {
      const params = new URLSearchParams()
      params.append('Body', '#02#0')
      params.append('To', DEVICE_PHONE_NUMBER)
      params.append('From', MASTER_PHONE_NUMBER)

      const data = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${ACCOUNT_SID}/Messages.json`,
        params,
        {
          auth: {
            username: ACCOUNT_SID,
            password: AUTH_TOKEN,
          },
        }
      )

      console.log('data: ', data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Head>
        <title>Elisa Laitenetti Control</title>
        <meta name="description" content="Expense tracker" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Elisa Laitenetti Control</h1>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <>
            <div>
              <button onClick={handleDeviceTurnOn}>Turn on</button>
              <button onClick={handleDeviceTurnOff}>Turn off</button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
