import React from 'react'

function Button({children,
type="button",
textColor ="text-white",
bgColor = "bg-blue-600",
className="", 
...props
}) {
  return (
   <button className={`px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-black font-bold ${className} ${textColor} ${bgColor}`} {...props}>{children}</button>
  )
}

export default Button