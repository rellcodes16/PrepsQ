const Button = ({ children, onClick, type }) => {
  const basestyle = 'bg-stone-500 rounded-md p-2 cursor-pointer m-2'

  const styles = {
    primary: basestyle + ' hover:bg-stone-500',
    secondary: basestyle + ' absolute right-0'
  }
  return (
    <button onClick={onClick} className={styles[type]}>
        {children}
    </button>
  )
}

export default Button