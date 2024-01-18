import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../quizSlice'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const CreateUser = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUser = (e) => {
    e.preventDefault();

    if(!username) return;
    dispatch(createUser(username))
    navigate('/app')
  }
  return (
    <form>
        <p className='mb-4 text-sm text-stone-600 md:text-base '>👋 Hey There! Please start by telling us your name:</p>
      <input
        type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Your full name"
        className='rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 
        focus:outline-none focus:ring focus:ring-stone-500 md:px-6 md:py-3 wb-72 mb-8'
      />

       {!username == '' && (<div>
          <Button type='primary' onClick={handleUser}>Start Quiz</Button>
        </div>)}
    </form>
  )
}

export default CreateUser