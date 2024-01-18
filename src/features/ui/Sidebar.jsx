import { useState } from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { SlClose } from "react-icons/sl"
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const[isSideBarOpen, setIsSideBarOpen] = useState(false)

    const { username, questions, questionsAnswered, sectionQuestionsAnswered } = useSelector(store=>store.quiz)

    const questionsLen = questions.length

    const countQuestionsForSection = (section) => {
      return questions.filter(question => question.section === section).length;
    }

  return (
    <div>
        <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className='fixed top-3 right-12 bg-transparent border-transparent'>
            {!isSideBarOpen ? (<IoReorderThreeOutline className='font-bold text-white text-3xl '/>) :
            (<SlClose />)}
        </button>

        <div className={`${
            isSideBarOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out fixed top-0 right-0 h-full w-80 bg-stone-600 p-4`}
        >

        {isSideBarOpen && (
          <button
            onClick={() => setIsSideBarOpen(false)}
            className='absolute top-4 right-4 bg-transparent border-transparent font-bold text-white text-3xl'
          >
            <SlClose />
          </button>
        )}
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" className='ml-[5.5rem]'> 
                <circle cx="50" cy="50" r="30" fill="grey"/>
            </svg>
            <h2 className='text-center py-2 font-bold text-2xl'>{username}</h2>

            <div className='text-center mt-8 font-bold tracking-wider'>
                <p>{questionsAnswered}/{questionsLen} Questions Answered</p><br/>
                <p>{sectionQuestionsAnswered['HTML']}/{countQuestionsForSection('HTML')} HTML Questions Answered</p><br/>
                <p>{sectionQuestionsAnswered['CSS']}/{countQuestionsForSection('CSS')} CSS Questions Answered</p><br/>
                <p>{sectionQuestionsAnswered['JS']}/{countQuestionsForSection('JS')} JS Questions Answered</p><br/>
                <p>{sectionQuestionsAnswered['REACT']}/{countQuestionsForSection('REACT')} REACT Questions Answered</p><br/>
                <p>{sectionQuestionsAnswered['DSA']}/{countQuestionsForSection('DSA')} DSA Questions Answered</p>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar

