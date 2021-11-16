const Button = ({...props}) => {
  return(
    <button 
      className="button"
      data-testid="button"
      {...props}
    >

    </button>
  )
}

export default Button;