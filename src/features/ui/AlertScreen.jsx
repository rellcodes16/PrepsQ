const AlertScreen = ({ message, onYes, onNo, onClose }) => {
  return (
    <div className="absolute top-[40%] sm:left-[32%] left-[10%] bg-stone-500 py-6 px-6 rounded-md">
        <button className="ml-[93%] mb-2" onClick={onClose}>
          ❌
        </button>
      <div className="">
        <p>{message}</p>
        <div className="flex justify-between">
          <button className="bg-stone-400 rounded-md mt-3 py-1 px-4 hover:bg-stone-700" onClick={onYes}>Yes</button>
          <button className="bg-stone-400 rounded-md mt-3 py-1 px-4 hover:bg-stone-700" onClick={onNo}>No</button>
        </div>
      </div>
    </div>
  )
}

export default AlertScreen