import React from 'react'
import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import {
  useUser,
  useSession,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'
import 'react-datepicker/dist/react-datepicker.css'

import Footer from '../components/Footer'

export default function Home() {
  const user = useUser()
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div>
      <Head>
        <title>Elisa Laittenetti Control</title>
        <meta name="description" content="Expense tracker" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>Elisa Laittenetti Control</h1>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <>
            <div>Test</div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
