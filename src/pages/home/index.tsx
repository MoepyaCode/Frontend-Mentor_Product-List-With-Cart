import { Main } from "../../components"

export default function Home() {
  const items = [...Array(5).keys()].map((i) => i + 1)

  function details() {
    return (
      <div className="flex flex-grow flex-wrap gap-4">
        {items.map((item, key) => (
          <div key={key} className="bg-red-400  flex-grow h-[2.5rem] grid place-items-center min-w-[50px]">
            {item}
          </div>
        ))}
      </div>
    )
  }

  return (
    <Main className="bg-slate-400 grid place-items-center ">
        {details()}
    </Main>
  )
}