import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from '../../store/counterSlice'
import { langAction } from '../../store/lngSlice'

const HomePage = () => {
  // const globalState = useSelector((globalState) => globalState)
  const counterValue = useSelector((globalState) => globalState.counter.value)

  const lngValue = useSelector((globalState) => globalState.lng.value)

  console.log('counterValue', counterValue)

  const dispatch = useDispatch()

  const handleClick = () => {
    // counterAction(100)
    dispatch(counterAction(100))
  }

  const handleChangeLang = ({ target: { value } }) => {
    dispatch(langAction(value))
  }

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleClick}>increment</button>
      <select name='lang' value={lngValue} onChange={handleChangeLang}>
        <option value='ua'>UA</option>
        <option value='en'>EN</option>
        <option value='pl'>PL</option>
      </select>
    </div>
  )
}

export default HomePage
