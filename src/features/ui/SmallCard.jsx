const SmallCard = ({ children, value, activeSection }) => {
  const isActive = value === activeSection;
  
  return (
    <div className={`${isActive ? 'bg-red-500 mr-2 rounded-xl mt-4 p-2 pl-3 ml-5' : 'bg-stone-500 mr-2 rounded-xl mt-4 p-2 pl-3 ml-5'}`}>
        {children}
    </div>
  )
}

export default SmallCard


