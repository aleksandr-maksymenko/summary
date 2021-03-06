import React from 'react'

function Link(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg__icon"
      {...props}
    >
      <path d="M301.964 0v43.886h137.494L142.55 340.794l31.031 31.032L467.623 77.784v134.33h43.885V0z" />
      <path d="M468.114 256v212.114H43.886V43.886h214.49V0H0v512h512V256z" />
    </svg>
  )
}

export default Link
