import React from 'react'

type Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function IncrementButton(props: Props) {
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
            <svg className={`${hover ? 'fill-[#C73B0F]' : 'fill-white'} transition-colors duration-300 ease-out`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>

        </button>
    )
}
