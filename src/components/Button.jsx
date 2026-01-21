import './Button.css'

function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  type = 'button',
  className = '',
  disabled = false,
  ...props 
}) {
  const buttonClasses = `btn btn-${variant} btn-${size} ${className}`.trim()
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
