import { fetchPhotos } from "./api/mediaApi"

const App = () => {

  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <button onClick={async () => {
        const data = await fetchPhotos('dog')
        console.log("Data:", data)
        console.log("Data_results:", data.results)
      }}>GEt Photo</button>
    </div >
  )
}

export default App