import { useDispatch, useSelector } from 'react-redux'
import { setActiceTabs } from '../redux/features/searchSlice'

const Tab = () => {

  const tabs = ['photos', 'videos']
  const dispatch = useDispatch()

  const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='flex gap-10 p-10'>
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${(activeTab == elem ? "bg-green-500" : "bg-gray-400")} transition bg-gray-600 px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActiceTabs(elem))
            }}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}

export default Tab