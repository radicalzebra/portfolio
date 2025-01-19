interface TagType {
 text:string
}

export default function Tag({text}:TagType) {
  return (
    <button className="bg-white text-black p-2 rounded-full px-4">{text}</button>
  )
}
