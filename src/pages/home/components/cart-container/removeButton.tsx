import React from 'react'

type Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function RemoveButton(props: Props) {
    const [hover, setHover] = React.useState(false)

    function handleMouseEnter() {
        setHover(true)
    }

    function handleMouseLeave() {
        setHover(false)
    }

    function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        props.handleClick(event)
    }

    return (
        <button onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`p-[3.75px] min-w-[17.5px] aspect-square border  rounded-full grid place-items-center ${hover ? 'border-[#260f08] scale-105': 'bg-transparent border-[#AD8A85]'} transition-colors duration-300 ease-out`}>
            <svg className={`${hover ? 'fill-[#260f08]' : 'fill-[#AD8A85]'} transition-colors duration-300 ease-out`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
        </button>
    )
}
