import ResultGrid from "../components/ResultGrid"
import SearchBar from "../components/SearchBar"
import Tab from "../components/Tab"

const HomePage = () => {
  return (
    <div>
      <div>Media Search</div>
      <SearchBar />
      <Tab />
      <ResultGrid />

    </div>
  )
}

export default HomePage