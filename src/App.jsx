// import { fetchPhotos, fetchVideo } from "./api/mediaApi"

import ResultGrid from "./components/ResultGrid"
import SearchBar from "./components/SearchBar"
import Tab from "./components/Tab"

const App = () => {

  return (
    <div className=" text-white w-full bg-gray-950">

      <SearchBar />
      <Tab />
      <ResultGrid />























      {/* //Fetch Demo data */}
      {/* <button className="bg-green-400 px-4 py-2 m-5"
        onClick={async () => {
          const data = await fetchPhotos('dog')
          console.log("Data_results:", data.results)
        }}>Get Photo</button>

      <button className="bg-green-400 px-4 py-2 m-5"
        onClick={async () => {
          const data = await fetchVideo('dog')
          console.log("Data_videos:", data.videos)
        }}>Get Videos</button> */}
    </div >
  )
}

export default App