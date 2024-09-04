import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export default function Heading(props: Props) {
  return (
    <h1 className={props.className}>{props.children}</h1>
  )
}
