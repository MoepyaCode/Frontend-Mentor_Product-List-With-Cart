import React from 'react'

type Props = {
    className?: string
    children: React.ReactNode
}

export default function Main(props: Props) {
    return (
        <main className={`font-red-hat-text min-h-screen ${props.className}`}>
            {props.children}
        </main>
    )
}
