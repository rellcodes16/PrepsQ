import { useSelector } from "react-redux"

const UserName = () => {
  const username = useSelector(store=>store.quiz.username)

  return (
    <div>{username}</div>
  )
}

export default UserName
