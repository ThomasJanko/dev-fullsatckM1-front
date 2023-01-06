
import '../styles/globals.scss'
import "../tailwind/input.css"
import '../tailwind/output.css'
import MainLayout from '../components/Layout/MainLayout'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
  )
}
