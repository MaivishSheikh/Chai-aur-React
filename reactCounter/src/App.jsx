import { useCallback, useState } from "react"
import moon from './assets/moon.svg'
import sunWhite from './assets/sunWhite.svg'

export default function App() {
  const [value, setValue] = useState(0)
  const [msg, setMsg] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const upCounter = useCallback(() => {
    setValue(value + 1)
    setMsg("")
  }, [msg, value])

  const downCounter = useCallback(() => {
    if(value <= 0) {
      setMsg("Value can't be negative") 
    }
    else {
      setValue(value - 1)
    }
  }, [msg, value])

  const isDarkMode = () => setDarkMode(!darkMode)

  const bgColor = darkMode ? "#000" : "#fff"
  const txtColor = darkMode ? "#fff" : "#000"
  const currentImage = darkMode ? sunWhite : moon

  return (
    <>
      <div className="h-screen w-screen px-6 lg:px-8 flex flex-col gap-10 duration-500 ease-out" style={{backgroundColor: bgColor}}>
        <button className="text-lg w-max duration-500 border-4 ease-out px-2 py-2 my-5 rounded-3xl block ml-auto" style={{ borderColor: txtColor}} onClick={isDarkMode}><img src={currentImage} style={{width: "20px", height: "20px"}} alt="Toggle Dark Mode" className="w-full h-auto" /></button>
        <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center my-5" style={{color: txtColor}}>React Counter</h1>
        <h3 className="text-3xl border-4 border-rose-700 w-min px-5 py-2 mx-auto" style={{color: txtColor}}>{value}</h3>
        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <button class="bg-rose-600 text-white px-4 py-2 w-[150px] rounded-md" onClick={upCounter}>Up Counter</button>
          <button class="bg-rose-600 text-white px-4 py-2 rounded-md w-[150px]" onClick={downCounter}>Down Counter</button>
        </div>
        <p className="mt-2 text-pretty text-lg tracking-tight text-gray-900 text-center my-5" style={{color: txtColor}}>{msg}</p>
      </div>
    </>
  )
}