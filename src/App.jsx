import { fetchPhotos, fetchVideo } from "./api/mediaApi"

const App = () => {

  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <button onClick={async () => {
        const data = await fetchPhotos('dog')
        console.log("Photo_Data:", data)
        console.log("Data_results:", data.results)
      }}>GEt Photo</button>

      <button onClick={async () => {
        const data = await fetchVideo('dog')
        console.log("Video_Data:", data)
        console.log("Data_videos:", data.videos)
      }}>Get Videos</button>
    </div >
  )
}

export default App