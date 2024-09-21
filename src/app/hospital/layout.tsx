
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import '../globals.css'

interface LayoutProps {
    children: React.ReactNode;
}

const fontHeading = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
})

const fontBody = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
})

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'antialiased bg-black',
                    fontHeading.variable,
                    fontBody.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}
