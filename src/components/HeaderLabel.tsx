interface HeaderLabelProps {
   text:string
}

export default function HeaderLabel({text}:HeaderLabelProps) {
  return (
    <p className="font-extrabold text-5xl text-gray-300 mb-10">{text.toUpperCase()}<span className="text-red-600">.</span></p>
  )
}
