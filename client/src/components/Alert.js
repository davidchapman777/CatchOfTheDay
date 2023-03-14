import { useAppContext } from "../context/appContext"

const Alert = () => {
  const { alertType, alertText }=useAppContext()
  return (
      <div>
          {alertText}
    </div>
  )
}
export default Alert