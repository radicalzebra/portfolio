import Tag from "./Tag"

interface SideType {
   title:string,
   items: string[],
   description:string
}

export default function Side({title,items,description}:SideType) {
  return (
    <aside className="text-white bg-red-90 w-1/2 flex flex-col gap-10">
      <p className="text-3xl font-medium">{title}</p>
      
      <div className="flex flex-wrap gap-2 w-11/12">
         {items.map(skill => {
            return <Tag text={skill}/>
         })}
      </div>
      <p className="w-11/12">
         {description}
      </p>
    </aside>
  )
}
