import './globals.css'
import { Ultra, Barlow, Stint_Ultra_Expanded, Poppins } from 'next/font/google'

export const ultra = Ultra({weight: ["400"], subsets: ['latin'], variable: '--font-ultra' })
export const barlow = Barlow({weight: ["400"], subsets: ['latin'],variable: '--font-barlow' })
export const stintUltra = Stint_Ultra_Expanded({weight: ["400"], subsets: ['latin'],variable: '--font-stintUltra' })
export const poppins = Poppins({weight: ["400"], subsets: ['latin'],variable: '--font-poppins' })

export const metadata = {
  title: 'TORQUE',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ultra.variable} ${barlow.variable} ${stintUltra.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
