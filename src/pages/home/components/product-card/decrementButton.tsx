import React from 'react'

type Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function DecrementButton(props: Props) {
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
        <button onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`p-[3.75px] min-w-[17.5px] aspect-square border border-white rounded-full grid place-items-center ${hover ? 'bg-white': 'bg-transparent'} transition-colors duration-300 ease-out`}>
            <svg className={`${hover ? 'fill-[#C73B0F]' : 'fill-white'} transition-colors duration-300 ease-out`} xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2"><path d="M0 .375h10v1.25H0V.375Z" /></svg>
        </button>
    )
}
