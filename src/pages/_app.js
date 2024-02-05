import {Montserrat} from 'next/font/google'
import '@/styles/globals.css'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  weight:'500',
  subsets:['latin'],
  variable:'--font-mont'
})
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
      <NavBar></NavBar>
      <AnimatePresence mode='wait'>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer></Footer>
    </main>
    </>
  )
} 
 