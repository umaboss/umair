import React from 'react'

function Paragraph({para, style}) {
  return (
    <div><p style={style}  className='text-14px w-[50%] text-white'>{para}</p></div>
  )
}

export default Paragraph